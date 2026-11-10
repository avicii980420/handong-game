/* ===========================================================
 * 《汉东风云 · 行测突围》 游戏引擎（纯逻辑，不碰 DOM）
 * 依赖：window.Store / window.QB_PARTS / window.STORY
 * =========================================================== */
(function (root) {
  'use strict';

  var MODULES = ['言语理解与表达', '数量关系', '判断推理', '资料分析', '常识判断'];
  var EXAM_ORDER = ['常识判断', '言语理解与表达', '数量关系', '判断推理', '资料分析'];
  var AH_MARK = '安徽省考';
  var CHAPTER_COUNT = 6;
  var PRACTICE_SIZE = 10;
  var HINTS_PER_CHAPTER = 3;
  var MORALE_HIGH = 35;

  // 安徽省考行测卷面结构（120 题 / 120 分钟），mini 为等比缩比
  var EXAM_PRESETS = {
    mini: {
      id: 'mini',
      name: '皖考小模考',
      minutes: 30,
      quotas: { '常识判断': 5, '言语理解与表达': 8, '数量关系': 4, '判断推理': 9, '资料分析': 4 },
      subQuotas: { '判断推理': { '图形推理': 2, '定义判断': 3, '类比推理': 2, '逻辑判断': 2 } }
    },
    full: {
      id: 'full',
      name: '皖考全真模考',
      minutes: 120,
      quotas: { '常识判断': 20, '言语理解与表达': 30, '数量关系': 15, '判断推理': 35, '资料分析': 20 },
      subQuotas: { '判断推理': { '图形推理': 5, '定义判断': 10, '类比推理': 10, '逻辑判断': 10 } }
    }
  };

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function cloneQuestion(q) {
    return {
      id: q.id,
      module: q.module,
      topic: q.topic,
      difficulty: q.difficulty,
      stem: q.stem,
      options: q.options.slice(),
      answer: q.answer,
      explanation: q.explanation,
      tag: q.tag,
      materialId: q.materialId || null,
      figures: q.figures ? {
        stem: q.figures.stem || null,
        options: q.figures.options ? q.figures.options.slice() : null
      } : null,
      story: !!q.story,
      chapter: q.chapter || null,
      exam: q.exam || null,
      tech: q.tech || null
    };
  }

  // 选项顺序保持题目原始顺序。
  // 说明：约 1/4 的解析会用「A项 / 第X项」定位选项，若运行时打乱选项，
  // 解析文字会与屏幕上的字母错位，因此这里只做浅拷贝、不打乱。
  function shuffledQuestion(q) {
    return cloneQuestion(q);
  }

  var Engine = {
    MODULES: MODULES,
    CHAPTER_COUNT: CHAPTER_COUNT,
    PRACTICE_SIZE: PRACTICE_SIZE,
    MORALE_HIGH: MORALE_HIGH,
    AH_MARK: AH_MARK,
    EXAM_ORDER: EXAM_ORDER,

    bank: { questions: [], materials: {} },
    story: null,
    byId: {},
    chapterMap: {},
    session: null,
    lastResult: null,
    lastPractice: null,
    _ev: {},

    // ---------- 事件 ----------
    on: function (evt, fn) {
      (this._ev[evt] || (this._ev[evt] = [])).push(fn);
      return this;
    },
    emit: function (evt, data) {
      (this._ev[evt] || []).forEach(function (fn) {
        try { fn(data); } catch (e) { if (root.console) console.error('[engine event]', evt, e); }
      });
    },

    // ---------- 启动 ----------
    boot: function () {
      var parts = root.QB_PARTS || [];
      var qs = [];
      var mats = {};
      parts.forEach(function (p) {
        if (!p) return;
        (p.questions || []).forEach(function (q) { if (q && q.id) qs.push(q); });
        if (p.materials) Object.keys(p.materials).forEach(function (k) { mats[k] = p.materials[k]; });
      });
      this.bank = { questions: qs, materials: mats };
      this.story = root.STORY || null;
      this.byId = {};
      var self = this;
      qs.forEach(function (q) { self.byId[q.id] = q; });
      this.chapterMap = {};
      if (this.story && Array.isArray(this.story.chapters)) {
        this.story.chapters.forEach(function (ch) { self.chapterMap[ch.id] = ch; });
      }
      Store.load();
      return this;
    },

    ready: function () {
      return !!(Store.state && this.bank.questions.length && this.story && this.story.chapters.length);
    },

    // ---------- 基础数据 ----------
    state: function () { return Store.state; },
    playerName: function () { return (Store.state && Store.state.player && Store.state.player.name) || '林远'; },
    q: function (id) { return this.byId[id] || null; },
    material: function (id) { return (id && this.bank.materials[id]) || null; },
    chapter: function (id) { return this.chapterMap[id] || null; },

    chapters: function () {
      var st = Store.state;
      var self = this;
      return (this.story ? this.story.chapters : []).map(function (ch) {
        var prog = st.chapterProgress[ch.id] || null;
        var qCount = 0;
        (ch.scenes || []).forEach(function (sc) { if (sc.t === 'q') qCount++; });
        return {
          id: ch.id,
          code: ch.code,
          title: ch.title,
          location: ch.location,
          time: ch.time,
          summary: ch.summary,
          locked: ch.id > st.unlocked,
          completed: !!(prog && prog.completed),
          accuracy: prog ? prog.accuracy : null,
          best: prog ? prog.best : null,
          questionCount: qCount,
          sceneCount: (ch.scenes || []).length
        };
      });
    },

    hasProgress: function () { return Store.hasSave(); },

    newGame: function (name) {
      Store.reset();
      var nm = String(name || '').trim().slice(0, 8);
      Store.state.player.name = nm || '林远';
      Store.save();
      this.session = null;
      this.lastResult = null;
      this.emit('new-game');
      return Store.state;
    },

    resetAll: function () {
      Store.reset();
      this.session = null;
      this.lastResult = null;
      this.lastPractice = null;
      this.emit('reset');
      return Store.state;
    },

    // ---------- 统计 ----------
    rank: function () { return Store.rankFor(Store.state.score); },

    overallAccuracy: function () {
      var s = Store.state.stats;
      return s.answered ? s.correct / s.answered : 0;
    },

    storyAccuracy: function () {
      var s = Store.state.stats.story;
      return s.answered ? s.correct / s.answered : 0;
    },

    moduleStats: function () {
      var st = Store.state;
      return MODULES.map(function (m) {
        var ms = st.stats.modules[m] || { answered: 0, correct: 0 };
        return {
          module: m,
          answered: ms.answered,
          correct: ms.correct,
          accuracy: ms.answered ? ms.correct / ms.answered : 0,
          bankSize: Engine.bank.questions.filter(function (q) { return q.module === m; }).length
        };
      });
    },

    weakestModule: function () {
      var list = this.moduleStats().filter(function (m) { return m.answered >= 3 && m.accuracy < 0.85; });
      if (!list.length) return null;
      list.sort(function (a, b) { return a.accuracy - b.accuracy; });
      return list[0];
    },

    cluesOfChapter: function (id) {
      return Store.state.clues.filter(function (c) { return c.chapter === id; });
    },

    // ---------- 剧情流程 ----------
    startChapter: function (id) {
      id = +id;
      var ch = this.chapter(id);
      if (!ch) return { error: '章节不存在' };
      if (id > Store.state.unlocked) return { error: '章节尚未解锁' };
      this.session = {
        mode: 'story',
        chapterId: id,
        cursor: 0,
        answered: false,
        answerResult: null,
        chosenChoice: null,
        choiceReply: null,
        combo: 0,
        maxCombo: 0,
        correct: 0,
        total: 0,
        hintsLeft: HINTS_PER_CHAPTER,
        eliminated: [],
        clueStart: Store.state.clues.length,
        finished: false,
        startedAt: Date.now()
      };
      this.enterScene(ch.scenes[0]);
      this.emit('chapter-start', { chapter: ch });
      this.emit('scene');
      return { chapter: ch, scene: ch.scenes[0] };
    },

    currentScene: function () {
      var s = this.session;
      if (!s || s.mode !== 'story' || s.finished) return null;
      var ch = this.chapter(s.chapterId);
      if (!ch) return null;
      return ch.scenes[s.cursor] || null;
    },

    sceneProgress: function () {
      var s = this.session;
      if (!s || s.mode !== 'story') return { index: 0, total: 0 };
      var ch = this.chapter(s.chapterId);
      return { index: s.cursor + 1, total: ch ? ch.scenes.length : 0 };
    },

    enterScene: function (sc) {
      var s = this.session;
      if (!s || !sc) return;
      if (sc.t === 'k') {
        var key = 'c' + s.chapterId + ':' + sc.title;
        var exists = Store.state.clues.some(function (c) { return c.key === key; });
        if (!exists) {
          Store.state.clues.push({ key: key, title: sc.title, text: sc.text, chapter: s.chapterId, at: Date.now() });
          Store.save();
          this.emit('clue', { title: sc.title, text: sc.text });
        }
      }
    },

    /** 推进到下一幕；遇到未作答的题目/未选择的抉择会被拦住 */
    advance: function () {
      var s = this.session;
      if (!s || s.mode !== 'story' || s.finished) return null;
      var ch = this.chapter(s.chapterId);
      if (!ch) return null;
      var scenes = ch.scenes;
      var cur = scenes[s.cursor];
      if (cur && cur.t === 'q' && !s.answered) return cur;
      if (cur && cur.t === 'c' && s.chosenChoice == null) return cur;
      if (s.cursor >= scenes.length - 1) {
        this.finishChapter();
        return null;
      }
      s.cursor++;
      s.answered = false;
      s.answerResult = null;
      s.chosenChoice = null;
      s.choiceReply = null;
      s.eliminated = [];
      this.enterScene(scenes[s.cursor]);
      this.emit('scene');
      return scenes[s.cursor];
    },

    answerQuestion: function (optIdx) {
      var s = this.session;
      if (!s || s.mode !== 'story' || s.answered) return null;
      var sc = this.currentScene();
      if (!sc || sc.t !== 'q') return null;
      var q = this.byId[sc.qid];
      if (!q) return { error: '题目数据缺失：' + sc.qid };
      var correct = +optIdx === q.answer;
      s.answered = true;
      s.total++;
      s.eliminated = [];
      if (correct) {
        s.correct++;
        s.combo++;
        s.maxCombo = Math.max(s.maxCombo, s.combo);
        var gained = 10 + Math.min(s.combo - 1, 4) * 2;
        Store.state.score += gained;
        Store.state.morale = clamp(Store.state.morale + 2, 0, 100);
        Store.state.stats.bestCombo = Math.max(Store.state.stats.bestCombo || 0, s.combo);
        s.answerResult = { correct: true, chosen: +optIdx, correctIndex: q.answer, question: q, gained: gained, combo: s.combo, moraleDelta: 2 };
      } else {
        s.combo = 0;
        Store.state.morale = clamp(Store.state.morale - 1, 0, 100);
        s.answerResult = { correct: false, chosen: +optIdx, correctIndex: q.answer, question: q, gained: 0, combo: 0, moraleDelta: -1 };
      }
      this.recordAnswer(q, correct, 'story', +optIdx);
      Store.save();
      this.emit('answer', s.answerResult);
      return s.answerResult;
    },

    useHint: function () {
      var s = this.session;
      if (!s || s.mode !== 'story' || s.answered || s.hintsLeft <= 0) return null;
      var sc = this.currentScene();
      if (!sc || sc.t !== 'q') return null;
      var q = this.byId[sc.qid];
      if (!q) return null;
      var wrong = [];
      for (var i = 0; i < 4; i++) if (i !== q.answer) wrong.push(i);
      var eligible = wrong.filter(function (i) { return s.eliminated.indexOf(i) < 0; });
      var pick = eligible.slice(0, 2);
      s.eliminated = s.eliminated.concat(pick);
      s.hintsLeft--;
      Store.state.score = Math.max(0, Store.state.score - 3);
      Store.save();
      this.emit('hint', { eliminated: s.eliminated, hintsLeft: s.hintsLeft });
      return { eliminated: s.eliminated, hintsLeft: s.hintsLeft };
    },

    chooseOption: function (idx) {
      var s = this.session;
      if (!s || s.mode !== 'story' || s.chosenChoice != null) return null;
      var sc = this.currentScene();
      if (!sc || sc.t !== 'c') return null;
      var opt = (sc.options || [])[+idx];
      if (!opt) return null;
      s.chosenChoice = +idx;
      s.choiceReply = opt.reply || '';
      if (opt.score) Store.state.score = Math.max(0, Store.state.score + +opt.score);
      if (opt.morale) Store.state.morale = clamp(Store.state.morale + +opt.morale, 0, 100);
      Store.save();
      this.emit('choice', { option: opt, index: +idx });
      return opt;
    },

    finishChapter: function () {
      var s = this.session;
      if (!s || s.mode !== 'story' || s.finished) return null;
      var ch = this.chapter(s.chapterId);
      if (!ch) return null;
      var acc = s.total ? s.correct / s.total : 0;
      var bonus = acc === 1 ? 20 : acc >= 0.8 ? 12 : acc >= 0.6 ? 5 : 0;
      var reward = (ch.reward && +ch.reward.score) || 60;
      var before = Store.state.score;
      Store.state.score += reward + bonus;
      var gained = Store.state.score - before;
      var prev = Store.state.chapterProgress[s.chapterId] || {};
      Store.state.chapterProgress[s.chapterId] = {
        completed: true,
        correct: s.correct,
        total: s.total,
        accuracy: acc,
        best: Math.max(prev.best || 0, Math.round(acc * 100)),
        at: Date.now()
      };
      if (s.chapterId < CHAPTER_COUNT) {
        Store.state.unlocked = Math.max(Store.state.unlocked, s.chapterId + 1);
      }
      var cluesGained = Math.max(0, Store.state.clues.length - s.clueStart);
      s.finished = true;
      var endingId = null;
      if (s.chapterId === CHAPTER_COUNT) {
        endingId = this.computeEnding();
        Store.state.ending = endingId;
        Store.state.endingAt = Date.now();
      }
      Store.save();
      var summary = {
        mode: 'story',
        chapterId: s.chapterId,
        code: ch.code,
        title: ch.title,
        correct: s.correct,
        total: s.total,
        accuracy: acc,
        maxCombo: s.maxCombo,
        bonus: bonus,
        reward: reward,
        scoreGained: gained,
        cluesGained: cluesGained,
        unlocked: Store.state.unlocked,
        outro: ch.outro || [],
        endingId: endingId,
        hintsUsed: HINTS_PER_CHAPTER - s.hintsLeft
      };
      this.lastResult = summary;
      this.session = null;
      this.emit('chapter-complete', summary);
      return summary;
    },

    computeEnding: function () {
      var acc = this.storyAccuracy();
      var morale = Store.state.morale;
      if (acc >= 0.7) return morale >= MORALE_HIGH ? 'justice' : 'lone';
      return morale >= MORALE_HIGH ? 'steady' : 'fall';
    },

    ending: function (id) {
      var list = (this.story && this.story.endings) || [];
      for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
      return null;
    },

    savedEnding: function () {
      var id = Store.state.ending;
      return id ? this.ending(id) : null;
    },

    // ---------- 技巧统计与技巧专项 ----------
    techList: function () {
      var self = this;
      return Object.keys(Store.state.techStats).map(function (tech) {
        var ts = Store.state.techStats[tech];
        return {
          tech: tech,
          module: ts.module || '其他',
          answered: ts.answered || 0,
          correct: ts.correct || 0,
          accuracy: ts.answered ? (ts.correct || 0) / ts.answered : 0,
          bankCount: self.bank.questions.filter(function (q) { return q.tech === tech; }).length
        };
      }).sort(function (a, b) {
        var ma = MODULES.indexOf(a.module), mb = MODULES.indexOf(b.module);
        if (ma !== mb) return ma - mb;
        return a.accuracy - b.accuracy;
      });
    },

    techCatalog: function () {
      var map = {};
      this.bank.questions.forEach(function (q) {
        if (!q.tech) return;
        if (!map[q.tech]) map[q.tech] = { tech: q.tech, module: q.module, bankCount: 0 };
        map[q.tech].bankCount++;
      });
      var st = Store.state.techStats;
      return Object.keys(map).map(function (k) {
        var ts = st[k] || { answered: 0, correct: 0 };
        var item = map[k];
        return {
          tech: k,
          module: item.module,
          bankCount: item.bankCount,
          answered: ts.answered || 0,
          correct: ts.correct || 0,
          accuracy: ts.answered ? (ts.correct || 0) / ts.answered : 0
        };
      }).sort(function (a, b) {
        var ma = MODULES.indexOf(a.module), mb = MODULES.indexOf(b.module);
        if (ma !== mb) return ma - mb;
        if (a.answered !== b.answered) return b.answered - a.answered;
        return a.accuracy - b.accuracy;
      });
    },

    techSummary: function () {
      var st = Store.state.techStats;
      var answered = 0, correct = 0;
      Object.keys(st).forEach(function (k) { answered += st[k].answered || 0; correct += st[k].correct || 0; });
      return { answered: answered, correct: correct, accuracy: answered ? correct / answered : 0, count: Object.keys(st).length };
    },

    practiceStartTech: function (tech) {
      var pool = this.bank.questions.filter(function (q) { return q.tech === tech; });
      if (!pool.length) return { error: '该技巧暂无题目' };
      var picked = shuffle(pool).slice(0, Math.min(PRACTICE_SIZE, pool.length)).map(function (q) {
        return cloneQuestion(q);
      });
      this.session = {
        mode: 'practice',
        source: 'tech',
        tech: tech,
        difficulty: 0,
        module: '技巧 · ' + tech,
        list: picked,
        idx: 0,
        answered: false,
        answerResult: null,
        correct: 0,
        total: 0,
        wrong: [],
        finished: false,
        startedAt: Date.now()
      };
      Store.state.practice.sessions++;
      Store.save();
      this.emit('practice-start', { module: '技巧 · ' + tech });
      return { module: '技巧 · ' + tech, total: picked.length, question: picked[0] };
    },

    // ---------- 错题重练 ----------
    practiceStartWrong: function () {
      var wrong = this.wrongList();
      if (!wrong.length) return { error: '错题本是空的，先去刷点题吧' };
      var picked = wrong.slice(0, PRACTICE_SIZE).map(function (w) {
        return cloneQuestion(w.question);
      });
      this.session = {
        mode: 'practice',
        source: 'wrong',
        difficulty: 0,
        module: '错题重练',
        list: picked,
        idx: 0,
        answered: false,
        answerResult: null,
        correct: 0,
        total: 0,
        wrong: [],
        finished: false,
        startedAt: Date.now()
      };
      Store.state.practice.sessions++;
      Store.save();
      this.emit('practice-start', { module: '错题重练' });
      return { module: '错题重练', total: picked.length, question: picked[0] };
    },

    // 题目池计数（供界面筛选展示）
    poolCount: function (module, source, difficulty) {
      var onlyAh = source === 'ah';
      var diff = parseInt(difficulty, 10) || 0;
      return this.bank.questions.filter(function (q) {
        if (q.module !== module) return false;
        if (onlyAh && q.exam !== AH_MARK) return false;
        if (diff && q.difficulty !== diff) return false;
        return true;
      }).length;
    },

    difficultyLabel: function (d) {
      return { 1: '基础', 2: '进阶', 3: '冲刺' }[parseInt(d, 10)] || '全部';
    },

    // ---------- 皖考模考 ----------
    ahBank: function () {
      return this.bank.questions.filter(function (q) { return q.exam === AH_MARK; });
    },

    ahCount: function () { return this.ahBank().length; },

    examPresets: function () {
      var self = this;
      return Object.keys(EXAM_PRESETS).map(function (k) {
        var p = EXAM_PRESETS[k];
        var size = 0;
        EXAM_ORDER.forEach(function (m) { size += (p.quotas[m] || 0); });
        return {
          id: p.id,
          name: p.name,
          minutes: p.minutes,
          size: size,
          quotas: p.quotas,
          subQuotas: p.subQuotas || null,
          pool: self.ahCount(),
          available: self.ahCount() >= size
        };
      });
    },

    examStart: function (presetId) {
      var p = EXAM_PRESETS[presetId] || EXAM_PRESETS.mini;
      var pool = this.ahBank();
      var size = 0;
      EXAM_ORDER.forEach(function (m) { size += (p.quotas[m] || 0); });
      var fallback = false;
      if (pool.length < size) { pool = this.bank.questions.slice(); fallback = true; }
      if (!pool.length) return { error: '题库为空' };

      var used = {};
      var picked = [];
      EXAM_ORDER.forEach(function (module) {
        var quota = p.quotas[module] || 0;
        var sub = p.subQuotas && p.subQuotas[module];
        var got = [];
        if (sub) {
          Object.keys(sub).forEach(function (topic) {
            var cands = shuffle(pool.filter(function (q) {
              return q.module === module && q.topic === topic && !used[q.id];
            }));
            cands.slice(0, sub[topic]).forEach(function (q) { used[q.id] = 1; got.push(q); });
          });
        }
        var need = quota - got.length;
        if (need > 0) {
          var rest = shuffle(pool.filter(function (q) { return q.module === module && !used[q.id]; }));
          rest.slice(0, need).forEach(function (q) { used[q.id] = 1; got.push(q); });
        }
        picked = picked.concat(got);
      });
      // 数量不足时用剩余题目补齐
      if (picked.length < size) {
        var extra = shuffle(pool.filter(function (q) { return !used[q.id]; }));
        extra.slice(0, size - picked.length).forEach(function (q) { used[q.id] = 1; picked.push(q); });
      }

      this.session = {
        mode: 'exam',
        presetId: p.id,
        preset: p,
        fallback: fallback,
        list: picked.map(shuffledQuestion),
        idx: 0,
        answers: new Array(picked.length).fill(-1),
        startedAt: Date.now(),
        duration: p.minutes * 60,
        submitted: false
      };
      Store.save();
      this.emit('exam-start', { preset: p, total: picked.length });
      return { preset: p, total: picked.length, fallback: fallback };
    },

    examCurrent: function () {
      var s = this.session;
      if (!s || s.mode !== 'exam' || s.submitted) return null;
      return s.list[s.idx] || null;
    },

    examSelect: function (optIdx) {
      var s = this.session;
      if (!s || s.mode !== 'exam' || s.submitted) return null;
      s.answers[s.idx] = +optIdx;
      Store.save();
      this.emit('exam-select', { index: s.idx, answer: +optIdx });
      return s.answers[s.idx];
    },

    examGo: function (idx) {
      var s = this.session;
      if (!s || s.mode !== 'exam' || s.submitted) return null;
      var max = s.list.length - 1;
      s.idx = clamp(+idx || 0, 0, max);
      this.emit('exam-go', { index: s.idx });
      return s.idx;
    },

    examAnsweredCount: function () {
      var s = this.session;
      if (!s || s.mode !== 'exam') return 0;
      return s.answers.filter(function (a) { return a >= 0; }).length;
    },

    examRemaining: function () {
      var s = this.session;
      if (!s || s.mode !== 'exam') return 0;
      var left = s.duration - Math.round((Date.now() - s.startedAt) / 1000);
      return Math.max(0, left);
    },

    examSubmit: function () {
      var s = this.session;
      if (!s || s.mode !== 'exam' || s.submitted) return null;
      s.submitted = true;
      var self = this;
      var byModule = {};
      MODULES.forEach(function (m) { byModule[m] = { module: m, total: 0, answered: 0, correct: 0, accuracy: 0 }; });
      var items = s.list.map(function (q, i) {
        var chosen = s.answers[i];
        var answered = chosen != null && chosen >= 0;
        var correct = answered && chosen === q.answer;
        var bm = byModule[q.module];
        bm.total++;
        if (answered) {
          bm.answered++;
          if (correct) bm.correct++;
          self.recordAnswer(q, correct, 'exam', chosen);
          if (!correct) self.addWrong(q.id, chosen, 'exam', q.module);
        } else {
          self.addWrong(q.id, -1, 'exam', q.module);
        }
        return { question: q, chosen: answered ? chosen : -1, answered: answered, correct: correct, index: i };
      });
      MODULES.forEach(function (m) {
        var bm = byModule[m];
        bm.accuracy = bm.answered ? bm.correct / bm.answered : 0;
      });
      var answeredCount = items.filter(function (x) { return x.answered; }).length;
      var correctCount = items.filter(function (x) { return x.correct; }).length;
      var seconds = Math.min(s.duration, Math.round((Date.now() - s.startedAt) / 1000));
      var st = Store.state;
      st.stats.exam.papers++;
      st.stats.exam.answered += answeredCount;
      st.stats.exam.correct += correctCount;
      if (answeredCount) {
        st.stats.exam.best = Math.max(st.stats.exam.best || 0, Math.round(correctCount / answeredCount * 100));
      }
      var summary = {
        mode: 'exam',
        presetId: s.presetId,
        name: s.preset.name,
        fallback: !!s.fallback,
        total: s.list.length,
        answered: answeredCount,
        correct: correctCount,
        accuracy: answeredCount ? correctCount / answeredCount : 0,
        seconds: seconds,
        duration: s.duration,
        byModule: byModule,
        items: items
      };
      this.lastExam = summary;
      this.session = null;
      Store.save();
      this.emit('exam-complete', summary);
      return summary;
    },

    // ---------- 练习模式 ----------
    practiceStart: function (module, source, difficulty) {
      var onlyAh = source === 'ah';
      var diff = parseInt(difficulty, 10) || 0;
      var match = function (q) {
        if (!onlyAh && !diff) return true;
        return true;
      };
      var pool = this.bank.questions.filter(function (q) {
        if (q.module !== module) return match(q) && false;
        if (onlyAh && q.exam !== AH_MARK) return false;
        if (diff && q.difficulty !== diff) return false;
        return true;
      });
      if (!pool.length && onlyAh) {
        pool = this.bank.questions.filter(function (q) { return q.module === module; });
        onlyAh = false;
      }
      if (!pool.length) return { error: '该模块暂无题目' };
      var picked = shuffle(pool).slice(0, Math.min(PRACTICE_SIZE, pool.length)).map(shuffledQuestion);
      this.session = {
        mode: 'practice',
        source: onlyAh ? 'ah' : 'all',
        difficulty: diff,
        module: module,
        list: picked,
        idx: 0,
        answered: false,
        answerResult: null,
        correct: 0,
        total: 0,
        wrong: [],
        finished: false,
        startedAt: Date.now()
      };
      Store.state.practice.sessions++;
      Store.save();
      this.emit('practice-start', { module: module });
      return { module: module, total: picked.length, question: picked[0] };
    },

    practiceCurrent: function () {
      var s = this.session;
      if (!s || s.mode !== 'practice' || s.finished) return null;
      return s.list[s.idx] || null;
    },

    practiceAnswer: function (optIdx) {
      var s = this.session;
      if (!s || s.mode !== 'practice' || s.answered) return null;
      var q = s.list[s.idx];
      if (!q) return null;
      var correct = +optIdx === q.answer;
      s.answered = true;
      s.total++;
      if (correct) s.correct++;
      else s.wrong.push({ q: q, chosen: +optIdx });
      s.answerResult = { correct: correct, chosen: +optIdx, correctIndex: q.answer, question: q };
      this.recordAnswer(q, correct, 'practice', +optIdx);
      if (correct && s.source === 'wrong') {
        Store.state.wrongBook = Store.state.wrongBook.filter(function (w) { return w.qid !== q.id; });
      }
      Store.save();
      this.emit('practice-answer', s.answerResult);
      return s.answerResult;
    },

    practiceNext: function () {
      var s = this.session;
      if (!s || s.mode !== 'practice' || s.finished) return null;
      if (s.idx >= s.list.length - 1) return this.practiceFinish();
      s.idx++;
      s.answered = false;
      s.answerResult = null;
      this.emit('practice-scene');
      return { done: false, question: s.list[s.idx], index: s.idx };
    },

    practiceFinish: function () {
      var s = this.session;
      if (!s || s.mode !== 'practice' || s.finished) return null;
      var sec = Math.max(1, Math.round((Date.now() - s.startedAt) / 1000));
      var acc = s.total ? s.correct / s.total : 0;
      Store.state.practice.totalSeconds = (Store.state.practice.totalSeconds || 0) + sec;
      Store.state.practice.best = Math.max(Store.state.practice.best || 0, Math.round(acc * 100));
      s.finished = true;
      var list = s.list;
      var summary = {
        mode: 'practice',
        module: s.module,
        source: s.source || 'all',
        difficulty: s.difficulty || 0,
        correct: s.correct,
        total: s.total,
        accuracy: acc,
        seconds: sec,
        wrong: s.wrong.slice(),
        list: list
      };
      this.lastPractice = summary;
      this.session = null;
      Store.save();
      this.emit('practice-complete', summary);
      return summary;
    },

    abortSession: function () {
      this.session = null;
    },

    // ---------- 答题记录 ----------
    recordAnswer: function (q, correct, mode, chosen) {
      var st = Store.state;
      st.stats.answered++;
      if (correct) st.stats.correct++;
      var ms = st.stats.modules[q.module] || (st.stats.modules[q.module] = { answered: 0, correct: 0 });
      ms.answered++;
      if (correct) ms.correct++;
      if (mode === 'story') {
        st.stats.story.answered++;
        if (correct) st.stats.story.correct++;
      } else if (mode === 'practice') {
        st.stats.practice.answered++;
        if (correct) st.stats.practice.correct++;
      }
      var seen = st.seen[q.id] || { c: 0, w: 0, last: 0 };
      if (correct) seen.c++; else seen.w++;
      seen.last = Date.now();
      seen.module = q.module;
      seen.tag = q.tag;
      st.seen[q.id] = seen;
      if (q.tech) {
        var ts = st.techStats[q.tech] || (st.techStats[q.tech] = { answered: 0, correct: 0, module: q.module });
        ts.answered++;
        if (correct) ts.correct++;
        ts.module = q.module;
      }
      if (!correct) this.addWrong(q.id, chosen, mode, q.module);
    },

    addWrong: function (qid, chosen, mode, module) {
      var st = Store.state;
      var found = null;
      for (var i = 0; i < st.wrongBook.length; i++) {
        if (st.wrongBook[i].qid === qid) { found = st.wrongBook[i]; break; }
      }
      if (found) {
        found.chosen = chosen;
        found.at = Date.now();
        found.mode = mode;
        found.times = (found.times || 1) + 1;
      } else {
        st.wrongBook.unshift({ qid: qid, chosen: chosen, at: Date.now(), mode: mode, module: module, times: 1 });
        if (st.wrongBook.length > 300) st.wrongBook.length = 300;
      }
    },

    wrongList: function () {
      var self = this;
      return Store.state.wrongBook.map(function (w) {
        var q = self.byId[w.qid];
        return q ? { entry: w, question: q } : null;
      }).filter(Boolean);
    },

    markMastered: function (qid) {
      var st = Store.state;
      st.wrongBook = st.wrongBook.filter(function (w) { return w.qid !== qid; });
      Store.save();
    },

    notebook: function (moduleFilter, onlyWrong) {
      var st = Store.state;
      var self = this;
      var wrongSet = {};
      st.wrongBook.forEach(function (w) { wrongSet[w.qid] = true; });
      var out = [];
      Object.keys(st.seen).forEach(function (qid) {
        var q = self.byId[qid];
        var seen = st.seen[qid];
        if (!q || !seen) return;
        if (moduleFilter && moduleFilter !== '全部' && q.module !== moduleFilter) return;
        if (onlyWrong && !wrongSet[qid]) return;
        out.push({ question: q, seen: seen, inWrongBook: !!wrongSet[qid] });
      });
      out.sort(function (a, b) { return (b.seen.last || 0) - (a.seen.last || 0); });
      return out;
    },

    // ---------- 工具 ----------
    formatSeconds: function (sec) {
      sec = Math.max(0, Math.round(sec));
      var m = Math.floor(sec / 60);
      var s = sec % 60;
      return m + ':' + (s < 10 ? '0' : '') + s;
    },

    difficultyStars: function (d) {
      var n = clamp(parseInt(d, 10) || 1, 1, 3);
      return '★★★'.slice(0, n) + '☆☆☆'.slice(0, 3 - n);
    },

    applyName: function (text) {
      return String(text == null ? '' : text).replace(/\{name\}/g, this.playerName());
    }
  };

  root.Engine = Engine;
})(typeof window !== 'undefined' ? window : globalThis);
