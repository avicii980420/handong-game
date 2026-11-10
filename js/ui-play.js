/* ===========================================================
 * 《汉东风云 · 行测突围》 剧情 / 答题 / 练习界面
 * 依赖 ui.js 中的 UI 命名空间
 * =========================================================== */
(function (root) {
  'use strict';

  var UI = root.UI;
  if (!UI) return;
  var Engine = root.Engine;
  var Store = root.Store;
  var LETTERS = ['A', 'B', 'C', 'D'];
  var esc = UI.esc;

  function hasFig(q) {
    return !!(q && q.figures && Array.isArray(q.figures.options) && q.figures.options.length === 4);
  }

  // ---------------- 材料 / 图形 ----------------
  UI.renderMaterial = function (m) {
    if (!m) return '';
    var h = '<div class="material"><div class="mat-title">' + esc(m.title) + '</div>';
    if (m.text) h += '<div class="mat-text">' + esc(m.text) + '</div>';
    if (Array.isArray(m.table) && m.table.length) {
      h += '<div class="mat-table-wrap"><table class="mat-table">';
      m.table.forEach(function (row, ri) {
        h += '<tr>';
        (row || []).forEach(function (cell) {
          h += (ri === 0 ? '<th>' : '<td>') + esc(cell) + (ri === 0 ? '</th>' : '</td>');
        });
        h += '</tr>';
      });
      h += '</table></div>';
    }
    if (m.note) h += '<div class="mat-note">' + esc(m.note) + '</div>';
    return h + '</div>';
  };

  // ---------------- 题目卡片 ----------------
  UI.qCard = function (q, opts) {
    opts = opts || {};
    if (!q) {
      return '<section class="q-card q-missing"><div class="q-stem">这道题的题库数据缺失（可能是数据文件未加载）。</div>' +
        '<div class="stage-actions"><button class="btn btn-primary" data-action="next-scene" data-kbd="1">继续</button></div></section>';
    }
    var answered = !!opts.answered;
    var res = opts.result || null;
    var action = opts.action || 'answer';
    var nextAction = opts.nextAction || 'next-scene';
    var elim = opts.eliminated || [];
    var figure = hasFig(q);

    var optsHtml = q.options.map(function (text, i) {
      var cls = 'opt';
      var disabled = answered || elim.indexOf(i) >= 0;
      if (answered) {
        if (i === q.answer) cls += ' correct';
        else if (res && i === res.chosen) cls += ' wrong';
        cls += ' locked';
      } else if (elim.indexOf(i) >= 0) {
        cls += ' elim';
      }
      if (!answered && opts.selected === i) cls += ' chosen';
      var content = figure
        ? '<span class="opt-fig">' + q.figures.options[i] + '</span>'
        : '<span class="opt-text">' + esc(text) + '</span>';
      return '<button class="' + cls + '" data-action="' + action + '" data-idx="' + i + '"' +
        (disabled ? ' disabled' : '') + ' tabindex="0">' +
        '<span class="opt-letter">' + LETTERS[i] + '</span>' + content +
        (answered && i === q.answer ? '<span class="opt-flag">正确</span>' : '') +
        (answered && res && i === res.chosen && i !== q.answer ? '<span class="opt-flag flag-bad">你选</span>' : '') +
        '</button>';
    }).join('');

    var material = q.materialId ? UI.renderMaterial(Engine.material(q.materialId)) : '';
    var figStem = (q.figures && q.figures.stem) ? '<div class="q-figure-stem">' + q.figures.stem + '</div>' : '';

    var resultHtml = '';
    if (answered && res) {
      var good = !!res.correct;
      var gained = res.gained ? '+ ' + res.gained + ' 政绩' : '';
      var combo = res.combo && res.combo > 1 ? '连击 ×' + res.combo : '';
      resultHtml = '<div class="q-result ' + (good ? 'good' : 'bad') + '">' +
        '<div class="qr-head">' +
        '<span class="qr-mark">' + (good ? '✓ 判断正确' : '✗ 判断有误') + '</span>' +
        '<span class="qr-sub">' + [gained, combo].filter(Boolean).join(' · ') + '</span>' +
        '</div>' +
        '<div class="qr-line">正确答案 <b>' + LETTERS[q.answer] + '</b>' +
        (good ? '' : ' ｜ 你的选择 <b class="bad">' + LETTERS[res.chosen] + '</b>') + '</div>' +
        '<div class="qr-explain"><div class="qr-explain-title">考点解析 · ' + esc(q.tag) + '</div>' +
        '<p>' + esc(q.explanation) + '</p></div>' +
        '</div>';
    }

    var tools = '';
    var formulaTab = q.module === '数量关系' ? 'sl' : (q.module === '资料分析' ? 'zl' : null);
    var formulaLink = formulaTab
      ? '<button class="q-formula-link" data-action="formula-peek" data-tab="' + formulaTab + '">公式手册</button>'
      : '';
    if (!answered && opts.showHint !== false) {
      var left = opts.hintsLeft == null ? 0 : opts.hintsLeft;
      tools = '<div class="q-tools">' +
        '<button class="btn btn-mini btn-ghost" data-action="hint"' + (left <= 0 ? ' disabled' : '') + '>排除干扰项 · 剩 ' + left + ' 次</button>' +
        formulaLink +
        '<span class="q-kbd-tip">按 1-4 作答 · Enter 继续</span></div>';
    } else if (!answered && formulaLink) {
      tools = '<div class="q-tools">' + formulaLink +
        '<span class="q-kbd-tip">按 1-4 作答 · Enter 下一题</span></div>';
    }

    var nextBtn = '';
    if (answered) {
      nextBtn = '<div class="stage-actions"><button class="btn btn-primary" data-action="' + nextAction + '" data-kbd="1">' +
        (opts.nextLabel || '继续') + '<span class="kbd">Enter</span></button></div>';
    }

    return '<section class="q-card">' +
      '<div class="q-head">' +
      '<span class="q-module">' + esc(q.module) + '</span>' +
      (q.exam === '安徽省考' ? '<span class="q-exam">皖考</span>' : '') +
      '<span class="q-topic">' + esc(q.topic) + '</span>' +
      '<span class="q-diff" title="难度">' + Engine.difficultyStars(q.difficulty) + '</span>' +
      (q.tech ? '<span class="q-tech">技巧 · ' + esc(q.tech) + '</span>' : '') +
      '<span class="q-tag">#' + esc(q.tag) + '</span>' +
      '</div>' +
      material +
      '<div class="q-stem">' + esc(Engine.applyName(q.stem)) + '</div>' +
      figStem +
      '<div class="q-options' + (figure ? ' fig-opts' : '') + '">' + optsHtml + '</div>' +
      tools + resultHtml + nextBtn +
      '</section>';
  };

  // ---------------- 场景渲染 ----------------
  UI.renderSceneStage = function () {
    var sc = Engine.currentScene();
    if (!sc) return '';
    var name = esc(Engine.playerName());

    if (sc.t === 'b') {
      return '<div class="scene scene-title">' +
        '<div class="stc-code">' + esc(sc.title.split('·')[0] || '') + '</div>' +
        '<h2 class="stc-title">' + esc((sc.title.split('·')[1] || sc.title).trim()) + '</h2>' +
        '<div class="stc-sub">' + esc(sc.subtitle || '') + '</div>' +
        '<div class="stc-rule"></div>' +
        this.continueBtn('开卷') + '</div>';
    }
    if (sc.t === 'n') {
      return '<div class="scene scene-narration">' +
        '<div class="scene-label">旁 白</div>' +
        '<div class="scene-text" id="scene-text"></div>' +
        this.continueBtn() + '</div>';
    }
    if (sc.t === 'i') {
      return '<div class="scene scene-inner">' +
        '<div class="scene-label">内心独白 · ' + name + '</div>' +
        '<div class="scene-text inner-text" id="scene-text"></div>' +
        this.continueBtn() + '</div>';
    }
    if (sc.t === 'd') {
      var ch = (Engine.story && Engine.story.characters && Engine.story.characters[sc.who]) || null;
      var cName = ch ? ch.name : sc.who;
      var cRole = ch ? ch.role : '';
      var cAvatar = ch ? ch.avatar : String(cName).slice(0, 1);
      var cColor = ch ? ch.color : '#8b9bb4';
      return '<div class="scene scene-dialogue">' +
        '<div class="speaker"><div class="speaker-avatar" style="--c:' + esc(cColor) + '">' + esc(cAvatar) + '</div>' +
        '<div class="speaker-meta"><div class="speaker-name">' + esc(cName) + '</div>' +
        '<div class="speaker-role">' + esc(cRole) + '</div></div></div>' +
        '<div class="scene-text dialogue-text" id="scene-text"></div>' +
        this.continueBtn() + '</div>';
    }
    if (sc.t === 'quote') {
      return '<div class="scene scene-quote">' +
        '<div class="quote-mark">“</div>' +
        '<div class="quote-text" id="scene-text"></div>' +
        (sc.by ? '<div class="quote-by">—— ' + esc(Engine.applyName(sc.by)) + '</div>' : '') +
        this.continueBtn('记下这句话') + '</div>';
    }
    if (sc.t === 'k') {
      return '<div class="scene scene-clue">' +
        '<div class="clue-stamp">线索</div>' +
        '<div class="clue-card"><div class="clue-title">' + esc(sc.title) + '</div>' +
        '<div class="clue-text">' + esc(Engine.applyName(sc.text)) + '</div></div>' +
        '<div class="clue-note">已归档至本案件卷宗</div>' +
        this.continueBtn('收入卷宗') + '</div>';
    }
    if (sc.t === 'c') {
      var chosen = Engine.session ? Engine.session.chosenChoice : null;
      var optHtml = (sc.options || []).map(function (o, i) {
        return '<button class="choice-opt" data-action="choose" data-idx="' + i + '"' +
          (chosen != null ? ' disabled' : '') + '>' +
          '<span class="choice-letter">' + LETTERS[i] + '</span>' +
          '<span class="choice-text">' + esc(Engine.applyName(o.text)) + '</span></button>';
      }).join('');
      var reply = '';
      if (chosen != null) {
        var opt = sc.options[chosen] || {};
        reply = '<div class="choice-reply"><div class="cr-mark">你的选择</div>' +
          '<p>' + esc(Engine.applyName(opt.reply || '')) + '</p></div>' +
          this.continueBtn();
      }
      return '<div class="scene scene-choice">' +
        '<div class="choice-kicker">抉 择</div>' +
        '<div class="choice-prompt">' + esc(Engine.applyName(sc.prompt)) + '</div>' +
        '<div class="choice-opts">' + optHtml + '</div>' + reply + '</div>';
    }
    if (sc.t === 'q') {
      var q = Engine.q(sc.qid);
      var s = Engine.session;
      return '<div class="scene scene-question">' +
        '<div class="q-kicker">办案推演 · 第 ' + (s ? (s.total + (s.answered ? 0 : 1)) : 1) + ' 题</div>' +
        this.qCard(q, {
          answered: !!(s && s.answered),
          result: s ? s.answerResult : null,
          eliminated: s ? s.eliminated : [],
          hintsLeft: s ? s.hintsLeft : 0,
          action: 'answer',
          nextAction: 'next-scene',
          showHint: true
        }) + '</div>';
    }
    return '<div class="scene"><div class="scene-text">（未知场景）</div>' + this.continueBtn() + '</div>';
  };

  UI.continueBtn = function (label) {
    return '<div class="stage-actions"><button class="btn btn-primary" data-action="next-scene" data-kbd="1">' +
      (label || '继续') + '<span class="kbd">Enter</span></button></div>';
  };

  // ---------------- 剧情主界面 ----------------
  UI.renderStory = function () {
    var s = Engine.session;
    if (!s || s.mode !== 'story') {
      return '<div class="page"><main class="page-body"><div class="empty"><p>当前没有进行中的案件。</p>' +
        '<button class="btn btn-ghost" data-action="go-chapters">返回卷宗</button></div></main></div>';
    }
    var ch = Engine.chapter(s.chapterId);
    var prog = Engine.sceneProgress();
    var clues = Engine.cluesOfChapter(s.chapterId);
    var st = Engine.state();
    var scene = Engine.currentScene();
    var isChoice = scene && scene.t === 'c' && s.chosenChoice == null;

    var clueHtml = clues.length ? clues.map(function (c) {
      return '<div class="clue-mini"><b>' + esc(c.title) + '</b><span>' + esc(c.text).slice(0, 46) + (c.text.length > 46 ? '…' : '') + '</span></div>';
    }).join('') : '<div class="clue-empty">尚未获得线索</div>';

    return '<div class="story">' +
      '<header class="story-top">' +
      '<button class="icon-btn" data-action="quit-chapter" aria-label="退出本章">←</button>' +
      '<div class="st-mid"><div class="st-code">' + esc(ch.code) + '</div><div class="st-title">' + esc(ch.title) + '</div></div>' +
      '<div class="st-stats">' +
      '<span class="chip"><em>政绩</em>' + st.score + '</span>' +
      '<span class="chip"><em>民心</em>' + st.morale + '</span>' +
      '<span class="chip chip-combo' + (s.combo > 1 ? ' hot' : '') + '"><em>连击</em>×' + (s.combo || 1) + '</span>' +
      '<span class="chip chip-progress"><em>进度</em>' + prog.index + '/' + prog.total + '</span>' +
      '</div></header>' +
      '<div class="story-grid">' +
      '<aside class="casefile">' +
      '<div class="casefile-head"><span class="cf-seal">卷</span><div><b>' + esc(ch.code) + '</b><span>' + esc(ch.title) + '</span></div></div>' +
      '<div class="cf-meta"><div><em>地点</em>' + esc(ch.location) + '</div><div><em>时间</em>' + esc(ch.time) + '</div></div>' +
      '<div class="cf-progress"><div class="bar gold"><i style="width:' + Math.round(prog.index / prog.total * 100) + '%"></i></div>' +
      '<div class="cf-progress-num">第 ' + prog.index + ' / ' + prog.total + ' 幕</div></div>' +
      '<div class="cf-clues"><div class="cf-clues-head">本案线索</div>' + clueHtml + '</div>' +
      '<div class="cf-tip">' + (isChoice ? '这一念，会改变什么？' : '答题即推演，每一题都在推进案情。') + '</div>' +
      '</aside>' +
      '<main class="stage" id="stage">' + this.renderSceneStage() + '</main>' +
      '</div></div>';
  };

  UI.afterStoryRender = function () {
    var sc = Engine.currentScene();
    if (!sc) return;
    var s = Engine.session;
    var sceneKey = s ? (s.chapterId + ':' + s.cursor) : '';
    if (sc.t === 'n' || sc.t === 'd' || sc.t === 'i' || sc.t === 'quote') {
      // 同一幕只播放一次逐字动画：点击“继续”跳过动画后重渲染不会重启
      if (this._typedSceneKey !== sceneKey) {
        this._typedSceneKey = sceneKey;
        var el = this.app.querySelector('#scene-text');
        if (el) this.typewrite(el, Engine.applyName(sc.text || ''));
      } else {
        var el2 = this.app.querySelector('#scene-text');
        if (el2) el2.textContent = Engine.applyName(sc.text || '');
      }
    }
    if (sc.t === 'k' && Engine.session) {
      var key = 'c' + Engine.session.chapterId + ':' + sc.title;
      if (this._lastClueKey !== key) {
        this._lastClueKey = key;
        UI.Sound.clue();
        this.toast('线索已归档 · ' + sc.title, 'gold');
      }
    }
  };

  // ---------------- 剧情操作 ----------------
  UI.onNextScene = function () {
    if (this.finishTyper()) { this.renderNow(); return; }
    var s = Engine.session;
    if (!s || s.mode !== 'story') { this.go('chapters'); return; }
    var sc = Engine.currentScene();
    // 题目数据缺失时允许跳过
    if (sc && sc.t === 'q' && !s.answered && !Engine.q(sc.qid)) s.answered = true;
    Engine.advance();
    if (!Engine.session && Engine.lastResult) {
      this.go('result', { result: Engine.lastResult });
      return;
    }
    this.renderNow();
  };

  UI.onAnswer = function (idx) {
    var res = Engine.answerQuestion(idx);
    if (!res || res.error) { this.toast((res && res.error) || '无法作答'); return; }
    if (res.correct) UI.Sound.correct(); else UI.Sound.wrong();
    this.renderNow();
  };

  UI.onHint = function () {
    var r = Engine.useHint();
    if (!r) return;
    UI.Sound.click();
    this.renderNow();
  };

  UI.onChoose = function (idx) {
    var opt = Engine.chooseOption(idx);
    if (!opt) return;
    UI.Sound.click();
    this.renderNow();
  };

  UI.onResultNext = function (id) {
    if (id) this.startChapter(id);
    else this.go('chapters');
  };

  // ---------------- 章节结算 ----------------
  UI.renderResult = function () {
    var r = this.payload && this.payload.result;
    if (!r) {
      return '<div class="page"><main class="page-body"><div class="empty"><p>没有结算数据。</p>' +
        '<button class="btn btn-ghost" data-action="go-chapters">返回卷宗</button></div></main></div>';
    }
    var accPct = Math.round(r.accuracy * 100);
    var outro = (r.outro || []).map(function (t) { return '<p>' + esc(Engine.applyName(t)) + '</p>'; }).join('');
    var nextId = r.chapterId + 1;
    var nextCh = Engine.chapter(nextId);
    var canNext = nextCh && nextId <= Engine.state().unlocked;
    var starring = r.accuracy >= 0.9 ? '★★★' : r.accuracy >= 0.7 ? '★★☆' : '★☆☆';

    return '<div class="page result-page">' +
      '<header class="topbar"><span class="icon-btn ghost"></span>' +
      '<div class="topbar-mid"><div class="tb-title">' + esc(r.code) + ' · 结案</div><div class="tb-sub">' + esc(r.title) + '</div></div>' +
      '<div class="topbar-right">' + this.chips() + '</div></header>' +
      '<main class="page-body">' +
      '<div class="result-hero">' +
      '<div class="ring" style="--pct:' + accPct + '"><div class="ring-in"><b>' + accPct + '%</b><span>正确率</span></div></div>' +
      '<div class="result-summary"><div class="rs-stars">' + starring + '</div>' +
      '<h2>' + esc(r.title) + ' · 卷宗已结</h2>' +
      '<div class="rs-rows">' +
      '<span>答对 <b>' + r.correct + '/' + r.total + '</b></span>' +
      '<span>最高连击 <b>×' + r.maxCombo + '</b></span>' +
      '<span>获得线索 <b>' + r.cluesGained + '</b></span>' +
      '<span>本章政绩 <b class="gold">+' + r.scoreGained + '</b></span>' +
      '</div></div></div>' +
      (outro ? '<div class="result-outro">' + outro + '</div>' : '') +
      '<div class="result-actions">' +
      (canNext ? '<button class="btn btn-primary btn-lg" data-action="result-next" data-id="' + nextId + '" data-kbd="1">继续侦办 · ' + esc(nextCh.code) + '</button>' : '') +
      (r.endingId ? '<button class="btn btn-primary btn-lg" data-action="view-ending" data-kbd="1">查看终章</button>' : '') +
      '<button class="btn btn-ghost" data-action="go-chapters">返回卷宗</button>' +
      '</div>' +
      '</main></div>';
  };

  // ---------------- 皖考模考卡片（复用） ----------------
  UI.examCardsHtml = function () {
    var SHORT = { '常识判断': '常识', '言语理解与表达': '言语', '数量关系': '数量', '判断推理': '判断', '资料分析': '资料' };
    return Engine.examPresets().map(function (p) {
      var quotaText = Engine.EXAM_ORDER.map(function (m) {
        return (p.quotas[m] || 0) + ' ' + SHORT[m];
      }).join(' · ');
      return '<button class="exam-card" data-action="exam-start" data-preset="' + p.id + '">' +
        '<div class="ec-head"><h3>' + esc(p.name) + '</h3><span class="ec-time">' + p.minutes + ' 分钟</span></div>' +
        '<div class="ec-size">' + p.size + '<em>题</em></div>' +
        '<p class="ec-quota">' + esc(quotaText) + '</p>' +
        '<div class="ec-foot"><span>' + (p.available ? '皖考题库充足 · 按安徽卷配比组卷' : '皖考题库不足，将混入基础题') + '</span>' +
        '<span class="mc-go">开始模考 →</span></div></button>';
    }).join('');
  };

  // ---------------- 刷题模式 ----------------
  UI.renderPracticeSetup = function () {
    var pl = this.payload || {};
    var source = pl.source === 'ah' ? 'ah' : 'all';
    var difficulty = parseInt(pl.difficulty, 10) || 0;
    var all = Engine.bank.questions;
    var ahTotal = Engine.ahCount();
    var statsByMod = {};
    Engine.moduleStats().forEach(function (m) { statsByMod[m.module] = m; });
    var wrongCount = Engine.wrongList().length;

    var cards = Engine.MODULES.map(function (m) {
      var n = Engine.poolCount(m, source, difficulty);
      var ms = statsByMod[m] || { answered: 0, accuracy: 0 };
      return '<button class="mod-card" data-action="practice-start" data-module="' + esc(m) + '"' +
        (n === 0 ? ' disabled' : '') + '>' +
        '<div class="mc-head"><h3>' + esc(m) + '</h3><span class="mc-count">' + n + ' 题</span></div>' +
        '<div class="bar"><i style="width:' + Math.round(ms.accuracy * 100) + '%"></i></div>' +
        '<div class="mc-foot"><span>' + (ms.answered ? '正确率 ' + UI.pct(ms.accuracy) : '尚未练习') + '</span>' +
        '<span class="mc-go">' + (n === 0 ? '暂无题目' : '开始 10 题 →') + '</span></div></button>';
    }).join('');

    var diffBtns = [[0, '全部'], [1, '★ 基础'], [2, '★★ 进阶'], [3, '★★★ 冲刺']].map(function (d) {
      return '<button class="seg-btn' + (difficulty === d[0] ? ' on' : '') + '" data-action="practice-difficulty" data-difficulty="' + d[0] + '">' + d[1] + '</button>';
    }).join('');

    return '<div class="page">' +
      this.topbar({
        title: '刷题模式',
        sub: '题库共 ' + all.length + ' 题 · 皖考风格 ' + ahTotal + ' 题',
        backAction: 'go-home',
        right: this.chips()
      }) +
      '<main class="page-body">' +
      '<div class="section-head"><h2>专项训练</h2><p>每题作答后立即看到考点解析，答错自动收进错题本。</p></div>' +

      '<div class="study-banner">' +
      '<div><b>行测零基础？</b><span>先从「数量关系 · ★ 基础」开始：每题都有分步讲解，先把手感练出来，再挑战进阶。</span></div>' +
      '<button class="btn btn-mini btn-ghost" data-action="practice-start" data-module="数量关系" data-difficulty="1">零基础起步</button>' +
      '</div>' +

      '<div class="source-bar"><span class="source-label">题库范围</span><div class="seg">' +
      '<button class="seg-btn' + (source === 'all' ? ' on' : '') + '" data-action="practice-source" data-source="all">全部题库 · ' + all.length + '</button>' +
      '<button class="seg-btn' + (source === 'ah' ? ' on' : '') + '" data-action="practice-source" data-source="ah">皖考风格 · ' + ahTotal + '</button>' +
      '</div></div>' +
      '<div class="source-bar"><span class="source-label">难度</span><div class="seg">' + diffBtns + '</div>' +
      '<span class="source-hint">建议顺序：★ 基础 → ★★ 进阶 → ★★★ 冲刺</span></div>' +

      '<div class="mod-grid">' + cards + '</div>' +

      '<div class="panel action-panel">' +
      '<button class="btn btn-ghost" data-action="practice-wrong"' + (wrongCount ? '' : ' disabled') + '>错题重练 · ' + wrongCount + ' 题</button>' +
      '<button class="btn btn-ghost" data-action="go-formulas">公式手册</button>' +
      '</div>' +

      '<div class="exam-entry">' +
      '<div class="section-head"><h2>皖考模考</h2><p>按安徽省考行测卷面配比组卷，交卷后统一出分、逐题解析。</p></div>' +
      '<div class="exam-grid">' + this.examCardsHtml() + '</div>' +
      '</div>' +
      '<div class="page-foot"><button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
      '</main></div>';
  };

  UI.startPractice = function (module, source, difficulty) {
    var r = Engine.practiceStart(module, source, difficulty);
    if (!r || r.error) { this.toast((r && r.error) || '无法开始练习'); return; }
    this.go('practice');
  };

  UI.startWrongPractice = function () {
    var r = Engine.practiceStartWrong();
    if (!r || r.error) { this.toast((r && r.error) || '暂无错题'); return; }
    this.go('practice');
  };

  // ---------------- 技巧统计 ----------------
  UI.renderSkills = function () {
    var list = Engine.techCatalog();
    var sum = Engine.techSummary();
    var byModule = {};
    list.forEach(function (t) {
      if (!byModule[t.module]) byModule[t.module] = [];
      byModule[t.module].push(t);
    });
    var sections = Object.keys(byModule).map(function (m) {
      var rows = byModule[m].map(function (t) {
        var tried = t.answered > 0;
        return '<div class="tech-row">' +
          '<div class="tech-name">' + esc(t.tech) + '</div>' +
          '<div class="bar"><i style="width:' + Math.round(t.accuracy * 100) + '%"></i></div>' +
          '<div class="tech-num">' + (tried ? t.correct + '/' + t.answered + ' · ' + UI.pct(t.accuracy) : '未练习') + '</div>' +
          '<button class="btn btn-mini" data-action="practice-tech" data-tech="' + esc(t.tech) + '">练这一类 · ' + t.bankCount + '</button>' +
          '</div>';
      }).join('');
      return '<div class="panel"><div class="panel-head"><h3>' + esc(m) + '</h3>' +
        '<span class="weak-tip">' + byModule[m].length + ' 个技巧</span></div>' +
        '<div class="tech-list">' + rows + '</div></div>';
    }).join('');

    return '<div class="page">' +
      this.topbar({ title: '技巧统计', sub: '按技巧标签看正确率 · 共 ' + list.length + ' 个技巧', backAction: 'go-profile', right: this.chips() }) +
      '<main class="page-body">' +
      '<div class="section-head"><h2>找到最不稳的那个技巧</h2>' +
      '<p>同一类题反复错，往往是某个技巧没掌握。先看这张表，再点「练这一类」集中刷 10 题；标题里的数字是该技巧的题库总量。</p></div>' +
      '<div class="tech-summary">' +
      '<div><b>' + sum.count + '</b><span>已练技巧</span></div>' +
      '<div><b>' + sum.answered + '</b><span>技巧题作答</span></div>' +
      '<div><b>' + UI.pct(sum.accuracy) + '</b><span>技巧题正确率</span></div>' +
      '</div>' +
      (list.length ? sections : '<div class="empty"><p>还没有带技巧标签的题目数据，先去刷题吧。</p>' +
        '<button class="btn btn-ghost" data-action="practice-setup">去刷题</button></div>') +
      '<div class="page-foot"><button class="btn btn-ghost" data-action="go-profile">返回档案</button>' +
      '<button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
      '</main></div>';
  };

  UI.startTechPractice = function (tech) {
    var r = Engine.practiceStartTech(tech);
    if (!r || r.error) { this.toast((r && r.error) || '该技巧暂无题目'); return; }
    this.go('practice');
  };

  // ---------------- 公式手册 ----------------
  UI.formulasHtml = function (group) {
    return group.sections.map(function (sec) {
      return '<section class="f-section"><h4>' + esc(sec.title) + '</h4>' +
        sec.formulas.map(function (f) {
          return '<div class="f-row">' +
            '<div class="f-name">' + esc(f.name) + '</div>' +
            '<div class="f-expr">' + esc(f.expr) + '</div>' +
            (f.note ? '<div class="f-note">' + esc(f.note) + '</div>' : '') +
            '</div>';
        }).join('') +
        (sec.tips && sec.tips.length
          ? '<ul class="f-tips">' + sec.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'
          : '') +
        '</section>';
    }).join('');
  };

  UI.renderFormulas = function () {
    var F = window.FORMULAS;
    if (!F || !F.groups || !F.groups.length) {
      return '<div class="page"><main class="page-body"><div class="empty"><p>公式手册数据未加载。</p>' +
        '<button class="btn btn-ghost" data-action="go-home">返回首页</button></div></main></div>';
    }
    var tab = (this.payload && this.payload.tab) || F.groups[0].id;
    var group = F.groups.filter(function (g) { return g.id === tab; })[0] || F.groups[0];
    var total = 0;
    F.groups.forEach(function (g) {
      g.sections.forEach(function (sec) { total += sec.formulas.length; });
    });
    var tabs = F.groups.map(function (g) {
      return '<button class="ftab' + (g.id === group.id ? ' on' : '') + '" data-action="formula-tab" data-tab="' + g.id + '" style="--c:' + esc(g.color) + '">' +
        '<b>' + esc(g.icon) + '</b>' + esc(g.name) + '</button>';
    }).join('');

    return '<div class="page">' +
      this.topbar({
        title: '公式手册',
        sub: '零基础速查 · 共 ' + total + ' 条公式 / ' + F.groups.length + ' 个模块',
        backAction: 'go-home',
        right: this.chips()
      }) +
      '<main class="page-body">' +
      '<div class="section-head"><h2>先记公式，再刷题</h2><p>' + esc(group.intro) + '</p></div>' +
      '<div class="formula-tabs">' + tabs + '</div>' +
      '<div class="formula-body" style="--c:' + esc(group.color) + '">' + this.formulasHtml(group) + '</div>' +
      '<div class="page-foot">' +
      '<button class="btn btn-ghost" data-action="practice-start" data-module="' + esc(group.id === 'sl' ? '数量关系' : group.id === 'zl' ? '资料分析' : group.id === 'yl' ? '言语理解与表达' : group.id === 'pd' ? '判断推理' : '常识判断') + '" data-difficulty="1">练 10 道基础题</button>' +
      '<button class="btn btn-ghost" data-action="go-home">返回首页</button>' +
      '</div></main></div>';
  };

  // 答题中途查看公式（弹层，不打断当前题目）
  UI.openFormulas = function (tab) {
    var F = window.FORMULAS;
    if (!F || !F.groups || !F.groups.length) return;
    var current = tab || F.groups[0].id;
    var wrap = document.createElement('div');
    wrap.className = 'modal-mask formula-mask';
    var self = this;
    var build = function () {
      var group = F.groups.filter(function (g) { return g.id === current; })[0] || F.groups[0];
      wrap.innerHTML = '<div class="formula-modal" role="dialog" aria-modal="true">' +
        '<div class="fm-head"><div><b>公式手册</b><span>数量 · 资料 · 言语 · 判断 · 常识</span></div>' +
        '<button class="icon-btn" data-fclose="1" aria-label="关闭">✕</button></div>' +
        '<div class="fm-tabs">' + F.groups.map(function (g) {
          return '<button class="ftab' + (g.id === group.id ? ' on' : '') + '" data-ftab="' + g.id + '"><b>' + esc(g.icon) + '</b>' + esc(g.name) + '</button>';
        }).join('') + '</div>' +
        '<div class="fm-body">' + self.formulasHtml(group) + '</div></div>';
    };
    build();
    this.modalRoot.appendChild(wrap);
    requestAnimationFrame(function () { wrap.classList.add('in'); });
    var close = function () {
      wrap.classList.remove('in');
      setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 180);
    };
    wrap.addEventListener('click', function (e) {
      var t = e.target.closest('[data-ftab]');
      if (t) { current = t.getAttribute('data-ftab'); build(); return; }
      if (e.target === wrap || e.target.closest('[data-fclose]')) close();
    });
    document.addEventListener('keydown', function escClose(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); document.removeEventListener('keydown', escClose); }
    });
  };

  // ---------------- 皖考模考入口 ----------------
  UI.renderExamSetup = function () {
    var ah = Engine.ahCount();
    var rows = [['常识判断', 20], ['言语理解与表达', 30], ['数量关系', 15], ['判断推理', 35], ['资料分析', 20]];
    var table = rows.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('');
    return '<div class="page">' +
      this.topbar({ title: '皖考模考', sub: '安徽省考行测 · 120 题 / 120 分钟', backAction: 'go-home', right: this.chips() }) +
      '<main class="page-body">' +
      '<div class="section-head"><h2>按安徽卷的规矩，考一次</h2>' +
      '<p>试卷按安徽省考（多省联考）行测的模块配比组卷，题目为「皖考」原创题库；交卷后统一出分，并给出逐题解析与模块分析。</p></div>' +
      '<div class="exam-intro panel">' +
      '<div class="ei-left"><h3>安徽省考行测结构</h3>' +
      '<table class="ei-table"><thead><tr><th>模块</th><th>题量</th></tr></thead><tbody>' + table +
      '<tr class="ei-total"><td>合计</td><td>120</td></tr></tbody></table></div>' +
      '<div class="ei-right"><p><b>为什么是这些题？</b> 安徽省考近年参加多省联考，行测 120 题、限时 120 分钟，判断推理细分图形/定义/类比/逻辑，资料分析 4 篇材料每篇 5 题。</p>' +
      '<p><b>题库说明</b> 游戏内「皖考」标签题共 <b>' + ah + '</b> 道，是按安徽省考题型、配比与安徽本土素材<b>原创命题</strong>，不收录真题原文。</p></div>' +
      '</div>' +
      '<div class="exam-grid">' + this.examCardsHtml() + '</div>' +
      '<div class="page-foot"><button class="btn btn-ghost" data-action="practice-setup">去专项刷题</button>' +
      '<button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
      '</main></div>';
  };

  // ---------------- 皖考模考 · 答题界面 ----------------
  UI.startExam = function (preset) {
    var r = Engine.examStart(preset || 'mini');
    if (!r || r.error) { this.toast((r && r.error) || '无法开始模考'); return; }
    if (r.fallback) this.toast('皖考题量不足，本次已混入基础题', 'gold');
    this.go('exam');
  };

  UI.renderExam = function () {
    var s = Engine.session;
    if (!s || s.mode !== 'exam') {
      return '<div class="page"><main class="page-body"><div class="empty"><p>没有进行中的模考。</p>' +
        '<button class="btn btn-ghost" data-action="go-exam">进入模考</button></div></main></div>';
    }
    var q = Engine.examCurrent();
    var n = s.list.length;
    var idx = s.idx;
    var chosen = s.answers[idx];
    var pal = s.answers.map(function (a, i) {
      var cls = 'pal-btn' + (a >= 0 ? ' answered' : '') + (i === idx ? ' current' : '');
      return '<button class="' + cls + '" data-action="exam-go" data-idx="' + i + '" title="第 ' + (i + 1) + ' 题">' + (i + 1) + '</button>';
    }).join('');

    return '<div class="exam">' +
      '<header class="story-top">' +
      '<button class="icon-btn" data-action="exam-quit" aria-label="退出模考">←</button>' +
      '<div class="st-mid"><div class="st-code">皖考模考 · ' + esc(s.preset.name) + '</div>' +
      '<div class="st-title">第 ' + (idx + 1) + ' / ' + n + ' 题</div></div>' +
      '<div class="st-stats">' +
      '<span class="chip"><em>剩余</em><b id="exam-timer">' + Engine.formatSeconds(Engine.examRemaining()) + '</b></span>' +
      '<span class="chip"><em>已答</em>' + Engine.examAnsweredCount() + '/' + n + '</span>' +
      '<button class="btn btn-mini btn-primary" data-action="exam-submit">交卷</button>' +
      '</div></header>' +
      '<div class="exam-body">' +
      '<div class="exam-palette-wrap"><div class="exam-palette">' + pal + '</div></div>' +
      '<div class="scene scene-question">' +
      this.qCard(q, { answered: false, selected: chosen, action: 'exam-select', showHint: false }) +
      '<p class="exam-tip">可以随时改答案，交卷后统一出分；按 1-4 选项，← → 翻题。</p>' +
      '</div>' +
      '<div class="exam-actions">' +
      '<button class="btn btn-ghost" data-action="exam-prev"' + (idx === 0 ? ' disabled' : '') + '>← 上一题</button>' +
      '<span class="exam-pos">' + (idx + 1) + ' / ' + n + '</span>' +
      (idx >= n - 1
        ? '<button class="btn btn-primary" data-action="exam-submit">交 卷</button>'
        : '<button class="btn btn-primary" data-action="exam-next">下一题 →</button>') +
      '</div></div></div>';
  };

  UI.afterExamRender = function () {
    var s = Engine.session;
    if (!s || s.mode !== 'exam') return;
    var self = this;
    var el = document.getElementById('exam-timer');
    this.clearTimer();
    var tick = function () {
      if (!Engine.session || Engine.session.mode !== 'exam') { self.clearTimer(); return; }
      var left = Engine.examRemaining();
      var node = document.getElementById('exam-timer');
      if (node) {
        node.textContent = Engine.formatSeconds(left);
        node.classList.toggle('urgent', left <= 300);
      }
      if (left <= 0) {
        self.clearTimer();
        self.autoSubmitExam();
      }
    };
    tick();
    this.practiceTimer = setInterval(tick, 500);
  };

  UI.onExamSelect = function (i) {
    Engine.examSelect(i);
    UI.Sound.click();
    this.renderNow();
  };
  UI.onExamPrev = function () {
    if (!Engine.session || Engine.session.mode !== 'exam') return;
    Engine.examGo(Engine.session.idx - 1);
    this.renderNow();
  };
  UI.onExamNext = function () {
    if (!Engine.session || Engine.session.mode !== 'exam') return;
    Engine.examGo(Engine.session.idx + 1);
    this.renderNow();
  };
  UI.onExamGo = function (i) {
    Engine.examGo(i);
    this.renderNow();
  };

  UI.confirmSubmitExam = function () {
    var s = Engine.session;
    if (!s || s.mode !== 'exam') return;
    var unanswered = s.list.length - Engine.examAnsweredCount();
    var self = this;
    this.confirm({
      title: '交卷',
      text: unanswered > 0 ? ('还有 ' + unanswered + ' 题未作答，未答按错处理。确定交卷吗？') : '确定交卷并查看成绩吗？',
      yesLabel: '交卷',
      danger: unanswered > 0,
      onYes: function () { self.submitExam(); }
    });
  };

  UI.submitExam = function () {
    var summary = Engine.examSubmit();
    if (!summary) return;
    UI.Sound.level();
    this.go('exam-result', { result: summary, presetId: summary.presetId });
  };

  UI.autoSubmitExam = function () {
    if (!Engine.session || Engine.session.mode !== 'exam') return;
    var summary = Engine.examSubmit();
    if (!summary) return;
    this.toast('时间到，已自动交卷', 'gold');
    this.go('exam-result', { result: summary, presetId: summary.presetId });
  };

  UI.confirmQuitExam = function () {
    var self = this;
    this.confirm({
      title: '退出模考',
      text: '本次答案不会保存成绩，确定退出吗？',
      yesLabel: '退出',
      danger: true,
      onYes: function () {
        Engine.abortSession();
        self.go('home');
      }
    });
  };

  // ---------------- 皖考模考 · 成绩 ----------------
  UI.renderExamResult = function () {
    var r = this.payload && this.payload.result;
    if (!r) {
      return '<div class="page"><main class="page-body"><div class="empty"><p>没有成绩数据。</p>' +
        '<button class="btn btn-ghost" data-action="go-exam">进入模考</button></div></main></div>';
    }
    var accPct = Math.round(r.accuracy * 100);
    var modRows = Engine.MODULES.map(function (m) {
      var bm = r.byModule[m];
      if (!bm || !bm.total) return '';
      return '<div class="mod-row"><div class="mod-name">' + esc(m) + '</div>' +
        '<div class="bar"><i style="width:' + Math.round(bm.accuracy * 100) + '%"></i></div>' +
        '<div class="mod-num">' + bm.correct + '/' + bm.answered + ' · ' + (bm.answered ? UI.pct(bm.accuracy) : '未答') + '</div></div>';
    }).join('');

    var review = r.items.map(function (it, i) {
      var q = it.question;
      var status = !it.answered
        ? '<span class="tag tag-red">未答</span>'
        : (it.correct ? '<span class="tag tag-green">正确</span>' : '<span class="tag tag-red">错误</span>');
      return '<details class="note-card">' +
        '<summary><span class="note-mod">第 ' + (i + 1) + ' 题</span>' +
        '<span class="note-stem">' + esc(q.stem).slice(0, 52) + '…</span>' +
        '<span class="note-meta">' + status + '<span class="note-tag">#' + esc(q.tag) + '</span></span></summary>' +
        '<div class="note-body">' +
        '<div class="note-q">' + esc(q.stem) + '</div>' +
        (q.materialId ? '<div class="mat-note">（本题材料见考卷，解析按材料数据计算）</div>' : '') +
        '<div class="note-opts">' + q.options.map(function (o, oi) {
          var cls = 'note-opt' + (oi === q.answer ? ' right' : '') + (oi === it.chosen && oi !== q.answer ? ' chosen' : '');
          return '<div class="' + cls + '"><b>' + LETTERS[oi] + '</b>' + esc(o) + '</div>';
        }).join('') + '</div>' +
        '<div class="note-explain"><b>考点解析 · ' + esc(q.tag) + '</b>' + esc(q.explanation) + '</div>' +
        '</div></details>';
    }).join('');

    return '<div class="page result-page">' +
      '<header class="topbar"><span class="icon-btn ghost"></span>' +
      '<div class="topbar-mid"><div class="tb-title">皖考模考 · 成绩</div>' +
      '<div class="tb-sub">' + esc(r.name) + ' · ' + r.total + ' 题</div></div>' +
      '<div class="topbar-right">' + this.chips() + '</div></header>' +
      '<main class="page-body">' +
      '<div class="result-hero">' +
      '<div class="ring" style="--pct:' + accPct + '"><div class="ring-in"><b>' + accPct + '%</b><span>正确率</span></div></div>' +
      '<div class="result-summary">' +
      '<h2>' + r.correct + ' / ' + r.total + ' 题正确</h2>' +
      '<div class="rs-rows">' +
      '<span>已答 <b>' + r.answered + '</b> 题</span>' +
      '<span>未答 <b>' + (r.total - r.answered) + '</b> 题</span>' +
      '<span>用时 <b>' + Engine.formatSeconds(r.seconds) + '</b></span>' +
      '<span>本卷得分 <b class="gold">' + r.correct + '</b> / ' + r.total + '</span>' +
      '</div></div></div>' +
      '<div class="panel"><div class="panel-head"><h3>模块分析</h3>' +
      '<span class="weak-tip">正确率 = 正确题数 / 已答</span></div>' +
      '<div class="mod-list">' + modRows + '</div></div>' +
      '<h3 class="block-title">逐题解析</h3>' +
      '<div class="note-list">' + review + '</div>' +
      '<div class="result-actions">' +
      '<button class="btn btn-primary" data-action="exam-again">再考一次</button>' +
      '<button class="btn btn-ghost" data-action="go-exam">返回模考入口</button>' +
      '<button class="btn btn-ghost" data-action="go-home">返回首页</button>' +
      '</div></main></div>';
  };

  UI.renderPractice = function () {
    var s = Engine.session;
    if (!s || s.mode !== 'practice') {
      return '<div class="page"><main class="page-body"><div class="empty"><p>没有进行中的练习。</p>' +
        '<button class="btn btn-ghost" data-action="practice-setup">选择模块</button></div></main></div>';
    }
    var q = Engine.practiceCurrent();
    var idx = s.idx + 1;
    var total = s.list.length;

    return '<div class="practice">' +
      '<header class="story-top">' +
      '<button class="icon-btn" data-action="practice-quit" aria-label="结束练习">←</button>' +
      '<div class="st-mid"><div class="st-code">专项训练</div><div class="st-title">' + esc(s.module) + '</div></div>' +
      '<div class="st-stats">' +
      '<span class="chip"><em>进度</em>' + idx + '/' + total + '</span>' +
      '<span class="chip"><em>答对</em>' + s.correct + '</span>' +
      '<span class="chip"><em>用时</em><b id="practice-timer">0:00</b></span>' +
      '</div></header>' +
      '<div class="practice-body">' +
      '<div class="practice-progress"><div class="bar gold"><i style="width:' + Math.round((s.answered ? idx : idx - 1) / total * 100) + '%"></i></div></div>' +
      '<div class="scene scene-question">' +
      this.qCard(q, {
        answered: s.answered,
        result: s.answerResult,
        action: 'practice-answer',
        nextAction: 'practice-next',
        nextLabel: s.idx >= total - 1 ? '查看本次成绩' : '下一题',
        showHint: false
      }) +
      '</div></div></div>';
  };

  UI.afterPracticeRender = function () {
    var s = Engine.session;
    if (!s || s.mode !== 'practice') return;
    var el = document.getElementById('practice-timer');
    if (el) el.textContent = Engine.formatSeconds((Date.now() - s.startedAt) / 1000);
    this.startTimer(el, s.startedAt);
  };

  UI.onPracticeAnswer = function (idx) {
    var res = Engine.practiceAnswer(idx);
    if (!res) return;
    if (res.correct) UI.Sound.correct(); else UI.Sound.wrong();
    this.renderNow();
  };

  UI.onPracticeNext = function () {
    var r = Engine.practiceNext();
    if (!r) return;
    if (r.done === false) { this.renderNow(); return; }
    // practiceNext 在末题时返回 summary
    if (r && r.mode === 'practice') this.go('practice-result', { result: r });
    else this.renderNow();
  };

  UI.renderPracticeResult = function () {
    var r = this.payload && this.payload.result;
    if (!r) {
      return '<div class="page"><main class="page-body"><div class="empty"><p>没有练习结果。</p>' +
        '<button class="btn btn-ghost" data-action="practice-setup">重新练习</button></div></main></div>';
    }
    var accPct = Math.round(r.accuracy * 100);
    var wrongHtml = r.wrong.length ? r.wrong.map(function (w) {
      var q = w.q;
      return '<details class="note-card">' +
        '<summary><span class="note-mod">' + esc(q.module) + '</span>' +
        '<span class="note-stem">' + esc(q.stem).slice(0, 56) + '…</span>' +
        '<span class="note-meta"><span class="tag tag-red">错</span><span class="note-tag">#' + esc(q.tag) + '</span></span></summary>' +
        '<div class="note-body"><div class="note-q">' + esc(q.stem) + '</div>' +
        '<div class="note-opts">' + q.options.map(function (o, i) {
          return '<div class="note-opt' + (i === q.answer ? ' right' : '') + (i === w.chosen ? ' chosen' : '') + '"><b>' + LETTERS[i] + '</b>' + esc(o) + '</div>';
        }).join('') + '</div>' +
        '<div class="note-explain"><b>考点解析</b>' + esc(q.explanation) + '</div></div></details>';
    }).join('') : '<div class="clue-empty">本次全对，漂亮。</div>';

    return '<div class="page result-page">' +
      '<header class="topbar"><span class="icon-btn ghost"></span>' +
      '<div class="topbar-mid"><div class="tb-title">练习成绩</div><div class="tb-sub">' + esc(r.module) + '</div></div>' +
      '<div class="topbar-right">' + this.chips() + '</div></header>' +
      '<main class="page-body">' +
      '<div class="result-hero">' +
      '<div class="ring" style="--pct:' + accPct + '"><div class="ring-in"><b>' + accPct + '%</b><span>正确率</span></div></div>' +
      '<div class="result-summary"><h2>' + r.correct + ' / ' + r.total + ' 题正确</h2>' +
      '<div class="rs-rows"><span>用时 <b>' + Engine.formatSeconds(r.seconds) + '</b></span>' +
      '<span>错题 <b>' + r.wrong.length + '</b></span></div></div></div>' +
      ((r.module === '数量关系' || r.module === '资料分析') && r.accuracy < 0.6
        ? '<div class="study-banner"><div><b>错得多没关系，先看公式。</b><span>把这一类题的公式和套路过一遍，再回来刷 10 题，正确率会明显上来。</span></div>' +
          '<button class="btn btn-mini btn-ghost" data-action="go-formulas" data-tab="' + (r.module === '数量关系' ? 'sl' : 'zl') + '">看公式手册</button></div>'
        : '') +
      '<h3 class="block-title">错题复盘</h3>' +
      '<div class="note-list">' + wrongHtml + '</div>' +
      '<div class="result-actions">' +
      '<button class="btn btn-primary" data-action="practice-again" data-kbd="1">再练一组</button>' +
      '<button class="btn btn-ghost" data-action="go-notebook">打开错题本</button>' +
      '<button class="btn btn-ghost" data-action="practice-setup">换个模块</button>' +
      '</div></main></div>';
  };
})(typeof window !== 'undefined' ? window : globalThis);
