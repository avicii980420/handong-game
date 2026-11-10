/* ===========================================================
 * 《汉东风云 · 行测突围》 界面框架
 * 首页 / 卷宗选择 / 档案 / 备考笔记 / 人物 / 设置 / 结局
 * 战斗与答题界面见 js/ui-play.js
 * =========================================================== */
(function (root) {
  'use strict';

  var MODULES = ['言语理解与表达', '数量关系', '判断推理', '资料分析', '常识判断'];
  var LETTERS = ['A', 'B', 'C', 'D'];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function pct(x) { return Math.round((x || 0) * 100) + '%'; }
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  // ---------------- 音效（无外部资源，WebAudio 合成） ----------------
  var Sound = {
    ctx: null,
    ensure: function () {
      if (this.ctx) return this.ctx;
      try {
        var C = root.AudioContext || root.webkitAudioContext;
        if (C) this.ctx = new C();
      } catch (e) { this.ctx = null; }
      return this.ctx;
    },
    enabled: function () {
      try { return !!(Store.state && Store.state.settings.sound); } catch (e) { return false; }
    },
    tone: function (freq, dur, type, gain) {
      var ctx = this.ensure();
      if (!ctx) return;
      try {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = type || 'sine';
        o.frequency.value = freq;
        var v = gain || 0.05;
        var t = ctx.currentTime;
        g.gain.setValueAtTime(v, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g); g.connect(ctx.destination);
        o.start(t); o.stop(t + dur + 0.02);
      } catch (e) { /* ignore */ }
    },
    click: function () { if (this.enabled()) this.tone(640, 0.06, 'triangle', 0.035); },
    correct: function () {
      if (!this.enabled()) return;
      var self = this;
      this.tone(680, 0.1, 'sine', 0.06);
      setTimeout(function () { self.tone(1020, 0.16, 'sine', 0.05); }, 90);
    },
    wrong: function () {
      if (!this.enabled()) return;
      var self = this;
      this.tone(230, 0.18, 'sawtooth', 0.04);
      setTimeout(function () { self.tone(150, 0.26, 'sine', 0.035); }, 120);
    },
    clue: function () {
      if (!this.enabled()) return;
      var self = this;
      this.tone(520, 0.09, 'triangle', 0.05);
      setTimeout(function () { self.tone(800, 0.14, 'triangle', 0.045); }, 80);
    },
    level: function () {
      if (!this.enabled()) return;
      var self = this;
      [523, 659, 784, 1046].forEach(function (f, i) {
        setTimeout(function () { self.tone(f, 0.16, 'sine', 0.05); }, i * 90);
      });
    }
  };

  var UI = {
    app: null,
    modalRoot: null,
    toastRoot: null,
    screen: 'home',
    payload: null,
    typer: null,
    practiceTimer: null,
    LETTERS: LETTERS,
    MODULES: MODULES,
    Sound: Sound,

    esc: esc,
    pct: pct,
    letters: LETTERS,

    // ---------------- 初始化 ----------------
    init: function () {
      this.app = document.getElementById('app');
      this.modalRoot = document.getElementById('modal-root');
      this.toastRoot = document.getElementById('toast-root');
      var self = this;
      this.app.addEventListener('click', function (e) {
        var el = e.target.closest('[data-action]');
        if (!el || el.disabled) return;
        e.preventDefault();
        self.handleAction(el.getAttribute('data-action'), el.dataset, el);
      });
      document.addEventListener('keydown', function (e) { self.handleKey(e); });
      this.applySettings();
    },

    applySettings: function () {
      try {
        var scale = (Store.state && Store.state.settings && Store.state.settings.fontScale) || 1;
        document.documentElement.style.setProperty('--font-scale', scale);
      } catch (e) { /* ignore */ }
    },

    // ---------------- 导航与渲染 ----------------
    go: function (screen, payload) {
      this.stopTyper();
      this.clearTimer();
      this.screen = screen;
      this.payload = payload || null;
      var self = this;
      // 让渲染稍作延迟，做出淡入过渡
      this.app.classList.add('switching');
      setTimeout(function () {
        self.render();
        self.app.classList.remove('switching');
      }, 90);
    },

    renderNow: function () {
      this.clearTimer();
      this.render();
    },

    render: function () {
      var html = this.renderScreen();
      this.app.innerHTML = html;
      this.app.className = 'app screen-' + this.screen;
      this.afterRender();
    },

    renderScreen: function () {
      switch (this.screen) {
        case 'home': return this.renderHome();
        case 'chapters': return this.renderChapters();
        case 'profile': return this.renderProfile();
        case 'notebook': return this.renderNotebook();
        case 'characters': return this.renderCharacters();
        case 'settings': return this.renderSettings();
        case 'ending': return this.renderEnding();
        case 'fatal': return this.renderFatal();
        case 'story': return this.renderStory();
        case 'result': return this.renderResult();
        case 'practice-setup': return this.renderPracticeSetup();
        case 'practice': return this.renderPractice();
        case 'practice-result': return this.renderPracticeResult();
        case 'exam-setup': return this.renderExamSetup();
        case 'exam': return this.renderExam();
        case 'exam-result': return this.renderExamResult();
        case 'formulas': return this.renderFormulas();
        case 'skills': return this.renderSkills();
        default: return this.renderHome();
      }
    },

    afterRender: function () {
      if (this.screen === 'story' && this.afterStoryRender) this.afterStoryRender();
      if (this.screen === 'practice' && this.afterPracticeRender) this.afterPracticeRender();
      if (this.screen === 'exam' && this.afterExamRender) this.afterExamRender();
      this.applySettings();
    },

    // ---------------- 通用组件 ----------------
    topbar: function (opts) {
      opts = opts || {};
      var back = opts.back === false ? '' :
        '<button class="icon-btn" data-action="' + esc(opts.backAction || 'go-home') + '" aria-label="返回">←</button>';
      return '<header class="topbar">' + back +
        '<div class="topbar-mid"><div class="tb-title">' + esc(opts.title || '') + '</div>' +
        (opts.sub ? '<div class="tb-sub">' + esc(opts.sub) + '</div>' : '') + '</div>' +
        '<div class="topbar-right">' + (opts.right || '') + '</div></header>';
    },

    chips: function () {
      var st = Engine.state();
      var rank = Engine.rank();
      return '<div class="chips">' +
        '<span class="chip"><em>政绩</em>' + st.score + '</span>' +
        '<span class="chip"><em>民心</em>' + st.morale + '</span>' +
        '<span class="chip chip-rank"><em>' + esc(rank.name) + '</em></span>' +
        '</div>';
    },

    // ---------------- 首页 ----------------
    renderHome: function () {
      var st = Engine.state();
      var hasSave = Engine.hasProgress();
      var rank = Engine.rank();
      var totalQ = Engine.bank.questions.length;
      var chapters = Engine.chapters();
      var doneCount = chapters.filter(function (c) { return c.completed; }).length;
      var resumeId = Math.min(st.unlocked, 6);
      var resumeCh = Engine.chapter(resumeId);
      var ending = Engine.savedEnding();

      var primary, nameRow = '';
      if (hasSave) {
        primary = '<button class="btn btn-primary btn-lg" data-action="continue" data-kbd="1">继续办案 · ' +
          esc(resumeCh ? resumeCh.code + ' ' + resumeCh.title : '第' + resumeId + '案') + '</button>';
      } else {
        primary = '<button class="btn btn-primary btn-lg" data-action="new-game" data-kbd="1">签署任命书 · 开始办案</button>';
        nameRow = '<div class="name-row"><label for="player-name">新任侦查员姓名</label>' +
          '<input id="player-name" class="name-input" maxlength="8" value="' + esc(st.player.name || '林远') + '" autocomplete="off" spellcheck="false"></div>';
      }

      var links = [];
      if (hasSave) {
        links.push('<button class="link-btn" data-action="go-chapters">案件卷宗</button>');
        links.push('<button class="link-btn" data-action="go-profile">我的档案</button>');
        links.push('<button class="link-btn" data-action="practice-setup">刷题模式</button>');
        links.push('<button class="link-btn" data-action="go-formulas">公式手册</button>');
        links.push('<button class="link-btn" data-action="go-skills">技巧统计</button>');
        if (Engine.ahCount() > 0) links.push('<button class="link-btn" data-action="go-exam">皖考模考</button>');
        links.push('<button class="link-btn" data-action="go-characters">人物图鉴</button>');
        if (ending) links.push('<button class="link-btn" data-action="view-ending">查看结局</button>');
        links.push('<button class="link-btn" data-action="go-settings">设置</button>');
        links.push('<button class="link-btn link-danger" data-action="new-game-confirm">重开新档</button>');
      } else {
        links.push('<button class="link-btn" data-action="practice-setup">先刷几道题</button>');
        links.push('<button class="link-btn" data-action="go-formulas">公式手册</button>');
        links.push('<button class="link-btn" data-action="go-skills">技巧统计</button>');
        if (Engine.ahCount() > 0) links.push('<button class="link-btn" data-action="go-exam">皖考模考</button>');
        links.push('<button class="link-btn" data-action="go-characters">人物图鉴</button>');
        links.push('<button class="link-btn" data-action="go-settings">设置</button>');
      }

      return '<div class="home">' +
        '<div class="home-bg" aria-hidden="true"></div>' +
        '<div class="home-wrap">' +
        '<div class="brand">' +
        '<div class="brand-seal"><span>汉东</span></div>' +
        '<h1 class="brand-title">汉东风云</h1>' +
        '<div class="brand-sub">行 测 突 围</div>' +
        '<p class="brand-tag">以案为卷 · 以题为刃 · 六案破一局</p>' +
        '</div>' +
        '<div class="home-card">' +
        nameRow +
        primary +
        '<div class="home-meta">' +
        (hasSave
          ? '<span>第 ' + st.unlocked + ' 案待破</span><span>已结 ' + doneCount + ' 案</span><span>' + esc(rank.name) + '</span>'
          : '<span>题库 ' + totalQ + ' 题</span>' +
            (Engine.ahCount() ? '<span>皖考风格 ' + Engine.ahCount() + ' 题</span>' : '<span>行测五模块</span>') +
            '<span>剧情 ' + chapters.length + ' 章</span>') +
        '</div>' +
        '<div class="home-links">' + links.join('<i class="dot"></i>') + '</div>' +
        '</div>' +
        '<p class="home-note">同人二创 · 对白原创 · 非商业用途 · 适合考公行测入门与刷题</p>' +
        '</div>' +
        '</div>';
    },

    // ---------------- 案件卷宗 ----------------
    renderChapters: function () {
      var chapters = Engine.chapters();
      var st = Engine.state();
      var self = this;
      var cards = chapters.map(function (c) {
        var cls = 'chapter-card' + (c.locked ? ' locked' : '') + (c.completed ? ' done' : '');
        var stateTxt = c.locked ? '未解锁' : c.completed ? '已结案' : '待侦办';
        var stars = c.accuracy == null ? '' :
          (c.accuracy >= 0.9 ? '★★★' : c.accuracy >= 0.7 ? '★★☆' : '★☆☆');
        return '<button class="' + cls + '" data-action="start-chapter" data-id="' + c.id + '"' +
          (c.locked ? ' disabled' : '') + '>' +
          '<div class="cc-top"><span class="cc-code">' + esc(c.code) + '</span>' +
          '<span class="cc-state">' + (c.locked ? '🔒 ' : '') + stateTxt + '</span></div>' +
          '<h3 class="cc-title">' + esc(c.title) + '</h3>' +
          '<div class="cc-loc">' + esc(c.location) + ' · ' + esc(c.time) + '</div>' +
          '<p class="cc-summary">' + esc(c.summary) + '</p>' +
          '<div class="cc-foot"><span>' + c.questionCount + ' 道题</span>' +
          '<span class="cc-stars">' + stars + '</span>' +
          (c.completed ? '<span class="cc-acc">' + pct(c.accuracy) + '</span>' : '') + '</div>' +
          (c.completed ? '<div class="cc-stamp">结</div>' : '') +
          '</button>';
      }).join('');

      return '<div class="page">' +
        this.topbar({ title: '案件卷宗', sub: '汉东省检察院 · 反贪局', right: this.chips() }) +
        '<main class="page-body">' +
        '<div class="section-head"><h2>六案连破，方见汉东晴天</h2>' +
        '<p>每案五题，答对推进案情，答错亦有考点解析。' +
        (st.unlocked <= 6 ? '当前可侦办至第 ' + st.unlocked + ' 案。' : '全部案件已解锁。') + '</p></div>' +
        '<div class="chapter-grid">' + cards + '</div>' +
        '<div class="page-foot"><button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
        '</main></div>';
    },

    // ---------------- 我的档案 ----------------
    renderProfile: function () {
      var st = Engine.state();
      var rank = Engine.rank();
      var mods = Engine.moduleStats();
      var chapters = Engine.chapters();
      var wrong = Engine.wrongList().length;
      var notes = Object.keys(st.seen).length;
      var acc = Engine.overallAccuracy();

      var modHtml = mods.map(function (m) {
        return '<div class="mod-row"><div class="mod-name">' + esc(m.module) + '</div>' +
          '<div class="bar"><i style="width:' + Math.round(m.accuracy * 100) + '%"></i></div>' +
          '<div class="mod-num">' + m.correct + '/' + m.answered + ' · ' + (m.answered ? pct(m.accuracy) : '未练习') + '</div></div>';
      }).join('');

      var chHtml = chapters.map(function (c) {
        var stars = c.accuracy == null ? '' : (c.accuracy >= 0.9 ? '★★★' : c.accuracy >= 0.7 ? '★★☆' : '★☆☆');
        return '<div class="rec-row"><span class="rec-code">' + esc(c.code) + '</span>' +
          '<span class="rec-title">' + esc(c.title) + '</span>' +
          '<span class="rec-stars">' + (c.completed ? stars : (c.locked ? '未解锁' : '待侦办')) + '</span>' +
          '<span class="rec-acc">' + (c.completed ? pct(c.accuracy) : '—') + '</span></div>';
      }).join('');

      var weak = Engine.weakestModule();

      return '<div class="page">' +
        this.topbar({ title: '我的档案', sub: '干部履历 · 办案统计', backAction: 'go-home', right: this.chips() }) +
        '<main class="page-body">' +
        '<div class="id-card">' +
        '<div class="id-seal">' + esc(rank.seal) + '</div>' +
        '<div class="id-main">' +
        '<div class="id-name">' + esc(st.player.name) + '<span class="rank-pill">' + esc(rank.name) + '</span></div>' +
        '<div class="id-title">' + esc(st.player.title || '汉东省检察院反贪局侦查员') + '</div>' +
        '<div class="id-progress"><div class="bar gold"><i style="width:' + Math.round(rank.progress * 100) + '%"></i></div>' +
        '<span>' + (rank.next ? '距「' + esc(rank.next) + '」还差 ' + rank.toNext + ' 政绩' : '已达最高职级') + '</span></div>' +
        '</div>' +
        '<div class="id-stats">' +
        '<div><b>' + pct(acc) + '</b><span>总正确率</span></div>' +
        '<div><b>' + st.stats.answered + '</b><span>累计答题</span></div>' +
        '<div><b>' + st.morale + '</b><span>民心</span></div>' +
        '</div></div>' +

        '<div class="panel"><div class="panel-head"><h3>行测模块掌握度</h3>' +
        (weak ? '<span class="weak-tip">薄弱项：' + esc(weak.module) + ' · 建议刷题</span>' : '') + '</div>' +
        '<div class="mod-list">' + modHtml + '</div></div>' +

        '<div class="panel"><div class="panel-head"><h3>§ 皖考模考</h3>' +
        '<span class="weak-tip">安徽省考卷面配比 · 原创命题</span></div>' +
        '<div class="exam-stat-row"><span>已模考 <b>' + (st.stats.exam.papers || 0) + '</b> 次</span>' +
        '<span>最佳正确率 <b>' + (st.stats.exam.best || 0) + '%</b></span>' +
        '<span>累计作答 <b>' + (st.stats.exam.answered || 0) + '</b> 题</span>' +
        '<button class="btn btn-mini" data-action="go-exam">去模考</button></div></div>' +

        '<div class="panel"><div class="panel-head"><h3>办案记录</h3></div>' +
        '<div class="rec-list">' + chHtml + '</div></div>' +

        '<div class="panel action-panel">' +
        '<button class="btn btn-ghost" data-action="go-notebook">错题本 · ' + wrong + ' 题</button>' +
        '<button class="btn btn-ghost" data-action="go-notebook-all">备考笔记 · ' + notes + ' 题</button>' +
        '<button class="btn btn-ghost" data-action="practice-setup">刷题模式</button>' +
        '<button class="btn btn-ghost" data-action="go-formulas">公式手册</button>' +
        '<button class="btn btn-ghost" data-action="go-skills">技巧统计</button>' +
        '</div>' +
        '<div class="page-foot"><button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
        '</main></div>';
    },

    // ---------------- 备考笔记 / 错题本 ----------------
    renderNotebook: function () {
      var pl = this.payload || {};
      var filter = pl.module || '全部';
      var onlyWrong = !!pl.onlyWrong;
      var list = Engine.notebook(filter === '全部' ? null : filter, onlyWrong);
      var wrongCount = Engine.wrongList().length;
      var self = this;

      var chips = ['全部'].concat(MODULES).map(function (m) {
        return '<button class="fchip' + (filter === m ? ' on' : '') + '" data-action="notebook-filter" data-module="' + esc(m) + '">' + esc(m) + '</button>';
      }).join('');

      var cards = list.map(function (item, i) {
        var q = item.question;
        var seen = item.seen;
        var correctCount = (seen.c || 0);
        var wrongCount = (seen.w || 0);
        var mark = (q.exam === '安徽省考' ? '<span class="tag tag-ah">皖考</span> ' : '') +
          (item.inWrongBook ? '<span class="tag tag-red">错题</span>' : '<span class="tag tag-green">已掌握</span>');
        return '<details class="note-card"' + (i === 0 ? ' open' : '') + '>' +
          '<summary>' +
          '<span class="note-mod">' + esc(q.module) + '</span>' +
          '<span class="note-stem">' + esc(q.stem).slice(0, 60) + '…</span>' +
          '<span class="note-meta">' + mark + '<span class="note-tag">#' + esc(q.tag) + '</span></span>' +
          '</summary>' +
          '<div class="note-body">' +
          '<div class="note-q">' + esc(q.stem) + '</div>' +
          '<div class="note-opts">' + q.options.map(function (o, oi) {
            return '<div class="note-opt' + (oi === q.answer ? ' right' : '') + '"><b>' + LETTERS[oi] + '</b>' + esc(o) + '</div>';
          }).join('') + '</div>' +
          '<div class="note-explain"><b>考点解析</b>' + esc(q.explanation) + '</div>' +
          '<div class="note-foot"><span>答对 ' + correctCount + ' 次 · 答错 ' + wrongCount + ' 次</span>' +
          (item.inWrongBook ? '<button class="btn btn-mini" data-action="mastered" data-qid="' + esc(q.id) + '">标记已掌握</button>' : '') +
          '</div>' +
          '</div></details>';
      }).join('');

      return '<div class="page">' +
        this.topbar({ title: onlyWrong ? '错题本' : '备考笔记', sub: '共 ' + list.length + ' 题', backAction: 'go-profile', right: this.chips() }) +
        '<main class="page-body">' +
        '<div class="filters"><div class="fchips">' + chips + '</div>' +
        '<div class="filters-right">' +
        '<button class="fchip toggle' + (onlyWrong ? ' on' : '') + '" data-action="notebook-wrong">只看错题</button>' +
        (wrongCount ? '<button class="btn btn-mini" data-action="practice-wrong">错题重练 · ' + wrongCount + ' 题</button>' : '') +
        '</div></div>' +
        (list.length ? '<div class="note-list">' + cards + '</div>' :
          '<div class="empty"><div class="empty-seal">空</div><p>' + (onlyWrong ? '错题本还是空的，保持住。' : '还没有答题记录，去办案或刷题吧。') + '</p>' +
          '<button class="btn btn-ghost" data-action="practice-setup">去刷题</button></div>') +
        '<div class="page-foot"><button class="btn btn-ghost" data-action="go-profile">返回档案</button></div>' +
        '</main></div>';
    },

    // ---------------- 人物图鉴 ----------------
    renderCharacters: function () {
      var chars = (Engine.story && Engine.story.characters) || {};
      var keys = Object.keys(chars);
      var cards = keys.map(function (k) {
        var c = chars[k];
        return '<div class="char-card">' +
          '<div class="char-avatar" style="--c:' + esc(c.color) + '">' + esc(c.avatar) + '</div>' +
          '<div class="char-info"><h3>' + esc(c.name) + '</h3>' +
          '<div class="char-role">' + esc(c.role) + '</div>' +
          '<p class="char-bio">' + esc(c.bio) + '</p></div>' +
          '</div>';
      }).join('');

      return '<div class="page">' +
        this.topbar({ title: '人物图鉴', sub: '汉东群像', backAction: 'go-home', right: this.chips() }) +
        '<main class="page-body">' +
        '<div class="section-head"><h2>汉东的人</h2><p>每个人都在自己的位置上，做着自己相信的选择。</p></div>' +
        '<div class="char-grid">' + cards + '</div>' +
        '<div class="page-foot"><button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
        '</main></div>';
    },

    // ---------------- 设置 ----------------
    renderSettings: function () {
      var s = Engine.state().settings;
      var storage = Store.hasLocalStorage ? '浏览器本地存储' : '内存（关闭页面即丢失）';
      var scaleName = s.fontScale >= 1.15 ? '大' : s.fontScale <= 0.92 ? '小' : '中';
      return '<div class="page">' +
        this.topbar({ title: '设置', backAction: 'go-home', right: this.chips() }) +
        '<main class="page-body">' +
        '<div class="panel set-panel">' +
        '<div class="set-row"><div><b>音效</b><span>答题、获得线索时的合成音</span></div>' +
        '<button class="switch' + (s.sound ? ' on' : '') + '" data-action="toggle-sound" aria-pressed="' + (s.sound ? 'true' : 'false') + '"><i></i></button></div>' +
        '<div class="set-row"><div><b>打字机效果</b><span>剧情文字逐字浮现</span></div>' +
        '<button class="switch' + (s.typewriter ? ' on' : '') + '" data-action="toggle-typewriter" aria-pressed="' + (s.typewriter ? 'true' : 'false') + '"><i></i></button></div>' +
        '<div class="set-row"><div><b>字号</b><span>当前：' + scaleName + '</span></div>' +
        '<div class="seg"><button class="seg-btn' + (s.fontScale <= 0.92 ? ' on' : '') + '" data-action="font-size" data-size="0.9">小</button>' +
        '<button class="seg-btn' + (s.fontScale > 0.92 && s.fontScale < 1.15 ? ' on' : '') + '" data-action="font-size" data-size="1">中</button>' +
        '<button class="seg-btn' + (s.fontScale >= 1.15 ? ' on' : '') + '" data-action="font-size" data-size="1.2">大</button></div></div>' +
        '</div>' +
        '<div class="panel set-panel">' +
        '<div class="set-row"><div><b>存档位置</b><span>' + storage + '</span></div>' +
        '<button class="btn btn-mini" data-action="go-home">知道了</button></div>' +
        '<div class="set-row"><div><b>清空存档</b><span>删除政绩、线索、错题本与通关记录，不可恢复</span></div>' +
        '<button class="btn btn-mini btn-danger" data-action="reset-save">清空</button></div>' +
        '</div>' +
        '<div class="about"><h3>关于</h3><p>《汉东风云 · 行测突围》是一款以反腐题材电视剧《人民的名义》为背景的<b>同人</b>学习游戏：人物姓名与事件框架致敬原作，全部台词、旁白与题目均为原创，仅用于学习交流、非商业用途。</p>' +
        '<p>行测题目覆盖言语理解与表达、数量关系、判断推理、资料分析、常识判断五个模块。答题记录仅保存在你自己的浏览器里。</p></div>' +
        '<div class="page-foot"><button class="btn btn-ghost" data-action="go-home">返回首页</button></div>' +
        '</main></div>';
    },

    // ---------------- 结局 ----------------
    renderEnding: function () {
      var e = this.payload && this.payload.ending ? this.payload.ending : Engine.savedEnding();
      if (!e) {
        return '<div class="page">' + this.topbar({ title: '结局', backAction: 'go-home' }) +
          '<main class="page-body"><div class="empty"><p>尚未破完全部案件。</p>' +
          '<button class="btn btn-ghost" data-action="go-chapters">去办案</button></div></main></div>';
      }
      var st = Engine.state();
      var rank = Engine.rank();
      var acc = Engine.storyAccuracy();
      var kindName = { good: '正义必胜', normal: '余味未尽', bad: '理想受挫' }[e.kind] || '';
      var paras = (e.text || []).map(function (t) { return '<p>' + esc(Engine.applyName(t)) + '</p>'; }).join('');
      return '<div class="ending ending-' + esc(e.kind) + '">' +
        '<div class="ending-glow" aria-hidden="true"></div>' +
        '<div class="ending-inner">' +
        '<div class="ending-kicker">汉东 · 终章 · ' + esc(kindName) + '</div>' +
        '<h1 class="ending-title">' + esc(e.title) + '</h1>' +
        '<div class="ending-text">' + paras + '</div>' +
        '<div class="ending-stats">' +
        '<div><b>' + pct(acc) + '</b><span>办案正确率</span></div>' +
        '<div><b>' + st.score + '</b><span>政绩</span></div>' +
        '<div><b>' + st.morale + '</b><span>民心</span></div>' +
        '<div><b>' + esc(rank.name) + '</b><span>最终职级</span></div>' +
        '</div>' +
        '<div class="ending-actions">' +
        '<button class="btn btn-primary" data-action="go-chapters">再巡卷宗</button>' +
        '<button class="btn btn-ghost" data-action="go-profile">查看档案</button>' +
        '<button class="btn btn-ghost" data-action="go-home">返回首页</button>' +
        '</div>' +
        '</div></div>';
    },

    renderFatal: function () {
      return '<div class="page"><main class="page-body"><div class="empty">' +
        '<div class="empty-seal">!</div><h2>剧本或题库未能加载</h2>' +
        '<p>请确认 js/data/ 下的数据文件存在，并通过本地服务器或直接打开 index.html 访问。</p>' +
        '</div></main></div>';
    },

    // ---------------- 操作分发 ----------------
    handleAction: function (name, data, el) {
      switch (name) {
        case 'go-home': this.go('home'); break;
        case 'go-chapters': this.go('chapters'); break;
        case 'go-profile': this.go('profile'); break;
        case 'go-characters': this.go('characters'); break;
        case 'go-settings': this.go('settings'); break;
        case 'go-notebook': this.go('notebook', { module: '全部', onlyWrong: true }); break;
        case 'go-notebook-all': this.go('notebook', { module: '全部', onlyWrong: false }); break;
        case 'continue': this.go('chapters'); break;
        case 'new-game': this.startNewGame(); break;
        case 'new-game-confirm': this.confirmNewGame(); break;
        case 'start-chapter': this.startChapter(parseInt(data.id, 10)); break;
        case 'next-scene': this.onNextScene(); break;
        case 'answer': this.onAnswer(parseInt(data.idx, 10)); break;
        case 'hint': this.onHint(); break;
        case 'choose': this.onChoose(parseInt(data.idx, 10)); break;
        case 'quit-chapter': this.confirmQuit(); break;
        case 'result-next': this.onResultNext(parseInt(data.id, 10)); break;
        case 'practice-setup': this.go('practice-setup'); break;
        case 'practice-source':
          this.go('practice-setup', { source: data.source || 'all', difficulty: (this.payload && this.payload.difficulty) || 0 });
          break;
        case 'practice-difficulty':
          this.go('practice-setup', {
            source: (this.payload && this.payload.source) || 'all',
            difficulty: parseInt(data.difficulty, 10) || 0
          });
          break;
        case 'practice-start':
          this.startPractice(data.module, (this.payload && this.payload.source) || 'all',
            parseInt(data.difficulty, 10) || (this.payload && this.payload.difficulty) || 0);
          break;
        case 'practice-wrong': this.startWrongPractice(); break;
        case 'go-skills': this.go('skills'); break;
        case 'practice-tech': this.startTechPractice(data.tech); break;
        case 'go-formulas': this.go('formulas', { tab: data.tab || 'sl' }); break;
        case 'formula-tab': this.go('formulas', { tab: data.tab || 'sl' }); break;
        case 'formula-peek': this.openFormulas(data.tab || 'sl'); break;
        case 'go-exam': this.go('exam-setup'); break;
        case 'exam-start': this.startExam(data.preset); break;
        case 'exam-select': this.onExamSelect(parseInt(data.idx, 10)); break;
        case 'exam-prev': this.onExamPrev(); break;
        case 'exam-next': this.onExamNext(); break;
        case 'exam-go': this.onExamGo(parseInt(data.idx, 10)); break;
        case 'exam-submit': this.confirmSubmitExam(); break;
        case 'exam-quit': this.confirmQuitExam(); break;
        case 'exam-again': this.startExam((this.payload && this.payload.presetId) || 'mini'); break;
        case 'practice-answer': this.onPracticeAnswer(parseInt(data.idx, 10)); break;
        case 'practice-next': this.onPracticeNext(); break;
        case 'practice-again': this.startPractice((Engine.lastPractice && Engine.lastPractice.module) || (this.payload && this.payload.result && this.payload.result.module) || MODULES[0]); break;
        case 'practice-quit': this.confirmQuitPractice(); break;
        case 'notebook-filter': this.go('notebook', { module: data.module, onlyWrong: !!(this.payload && this.payload.onlyWrong) }); break;
        case 'notebook-wrong': this.go('notebook', { module: (this.payload && this.payload.module) || '全部', onlyWrong: !(this.payload && this.payload.onlyWrong) }); break;
        case 'mastered': Engine.markMastered(data.qid); this.toast('已标记掌握'); this.renderNow(); break;
        case 'view-ending': this.go('ending', { ending: Engine.savedEnding() }); break;
        case 'toggle-sound':
          Store.state.settings.sound = !Store.state.settings.sound;
          Store.save();
          if (Store.state.settings.sound) Sound.click();
          this.renderNow();
          break;
        case 'toggle-typewriter':
          Store.state.settings.typewriter = !Store.state.settings.typewriter;
          Store.save();
          this.renderNow();
          break;
        case 'font-size':
          Store.state.settings.fontScale = parseFloat(data.size) || 1;
          Store.save();
          this.applySettings();
          this.renderNow();
          break;
        case 'reset-save': this.confirmReset(); break;
        default: break;
      }
    },

    // ---------------- 流程方法 ----------------
    startNewGame: function () {
      var input = document.getElementById('player-name');
      var name = input ? input.value : (Engine.state().player.name || '林远');
      if (Engine.hasProgress()) { this.confirmNewGame(); return; }
      Engine.newGame(name);
      this.toast('任命书已签收，' + Engine.playerName() + '同志', 'ok');
      Sound.level();
      this.go('chapters');
    },

    confirmNewGame: function () {
      var self = this;
      this.confirm({
        title: '重开新档',
        text: '当前政绩、线索、错题本与通关记录将被清空。确定重新开始吗？',
        yesLabel: '确定重开',
        danger: true,
        onYes: function () {
          var input = document.getElementById('player-name');
          var name = input ? input.value : Engine.state().player.name;
          Engine.newGame(name);
          Sound.level();
          self.go('chapters');
        }
      });
    },

    startChapter: function (id) {
      this._typedSceneKey = null;
      var res = Engine.startChapter(id);
      if (!res || res.error) { this.toast(res && res.error ? res.error : '无法开始'); return; }
      Sound.click();
      this.go('story');
    },

    confirmQuit: function () {
      var self = this;
      this.confirm({
        title: '退出本章',
        text: '本章答题记录会计入统计，但章节进度不保留（已获得的线索会保留）。',
        yesLabel: '退出',
        danger: true,
        onYes: function () {
          Engine.abortSession();
          self.go('chapters');
        }
      });
    },

    confirmQuitPractice: function () {
      var self = this;
      this.confirm({
        title: '结束练习',
        text: '已作答的题目会计入统计。确定离开吗？',
        yesLabel: '离开',
        onYes: function () {
          Engine.abortSession();
          self.go('home');
        }
      });
    },

    confirmReset: function () {
      var self = this;
      this.confirm({
        title: '清空存档',
        text: '这会删除全部政绩、线索、错题本和通关记录，且无法恢复。',
        yesLabel: '确认清空',
        danger: true,
        onYes: function () {
          Engine.resetAll();
          self.toast('存档已清空');
          self.go('home');
        }
      });
    },

    // ---------------- 打字机 ----------------
    typewrite: function (el, text) {
      this.stopTyper();
      var enabled = true;
      try { enabled = !!Store.state.settings.typewriter; } catch (e) { enabled = true; }
      if (!enabled || !el || text.length < 2) { if (el) el.textContent = text; return; }
      var self = this;
      var i = 0;
      el.textContent = '';
      el.classList.add('typing');
      var timer = setInterval(function () {
        i += 2;
        el.textContent = text.slice(0, i);
        if (i >= text.length) {
          el.textContent = text;
          el.classList.remove('typing');
          clearInterval(timer);
          if (self.typer && self.typer.timer === timer) self.typer = null;
        }
      }, 22);
      this.typer = { el: el, text: text, timer: timer };
    },

    finishTyper: function () {
      if (!this.typer) return false;
      clearInterval(this.typer.timer);
      if (this.typer.el) {
        this.typer.el.textContent = this.typer.text;
        this.typer.el.classList.remove('typing');
      }
      this.typer = null;
      return true;
    },

    stopTyper: function () {
      if (this.typer) {
        clearInterval(this.typer.timer);
        this.typer = null;
      }
    },

    // ---------------- 计时器 ----------------
    startTimer: function (el, startedAt) {
      var self = this;
      this.clearTimer();
      this.practiceTimer = setInterval(function () {
        var esc2 = Math.max(0, Math.round((Date.now() - startedAt) / 1000));
        if (el && el.isConnected) el.textContent = Engine.formatSeconds(esc2);
      }, 500);
    },

    clearTimer: function () {
      if (this.practiceTimer) { clearInterval(this.practiceTimer); this.practiceTimer = null; }
    },

    // ---------------- 键盘 ----------------
    handleKey: function (e) {
      if (!this.app) return;
      var tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (this.screen === 'exam' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        var nav = this.app.querySelector('[data-action="' + (e.key === 'ArrowLeft' ? 'exam-prev' : 'exam-next') + '"]');
        if (nav && !nav.disabled) nav.click();
        return;
      }
      if (this.screen === 'exam' && e.key === 'Enter') {
        var nextBtn = this.app.querySelector('[data-action="exam-next"]');
        if (nextBtn && !nextBtn.disabled) { e.preventDefault(); nextBtn.click(); }
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        var btn = this.app.querySelector('[data-kbd="1"]');
        if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
        return;
      }
      if (/^[1-4]$/.test(e.key)) {
        var idx = parseInt(e.key, 10) - 1;
        var opt = this.app.querySelector('[data-action="answer"][data-idx="' + idx + '"]:not([disabled]),[data-action="practice-answer"][data-idx="' + idx + '"]:not([disabled]),[data-action="choose"][data-idx="' + idx + '"]:not([disabled]),[data-action="exam-select"][data-idx="' + idx + '"]:not([disabled])');
        if (opt) { e.preventDefault(); opt.click(); }
      }
    },

    // ---------------- Toast ----------------
    toast: function (msg, kind) {
      if (!this.toastRoot) return;
      var el = document.createElement('div');
      el.className = 'toast' + (kind ? ' toast-' + kind : '');
      el.textContent = msg;
      this.toastRoot.appendChild(el);
      setTimeout(function () { el.classList.add('in'); }, 10);
      setTimeout(function () { el.classList.remove('in'); }, 1700);
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2100);
    },

    // ---------------- 确认弹窗 ----------------
    confirm: function (opts) {
      if (!this.modalRoot) return;
      opts = opts || {};
      var wrap = document.createElement('div');
      wrap.className = 'modal-mask';
      wrap.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' +
        '<div class="modal-title">' + esc(opts.title || '确认') + '</div>' +
        '<div class="modal-text">' + esc(opts.text || '') + '</div>' +
        '<div class="modal-actions">' +
        '<button class="btn btn-ghost" data-modal="no">' + esc(opts.noLabel || '取消') + '</button>' +
        '<button class="btn ' + (opts.danger ? 'btn-danger' : 'btn-primary') + '" data-modal="yes">' + esc(opts.yesLabel || '确定') + '</button>' +
        '</div></div>';
      this.modalRoot.appendChild(wrap);
      var self = this;
      var close = function () {
        wrap.classList.add('out');
        setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 180);
        document.removeEventListener('keydown', onKey);
      };
      var onKey = function (e) {
        if (e.key === 'Escape') { e.preventDefault(); close(); }
        if (e.key === 'Enter') { e.preventDefault(); close(); if (opts.onYes) opts.onYes(); }
      };
      wrap.addEventListener('click', function (e) {
        var b = e.target.closest('[data-modal]');
        if (!b) { if (e.target === wrap) close(); return; }
        if (b.getAttribute('data-modal') === 'yes') {
          close();
          if (opts.onYes) { try { opts.onYes(); } catch (err) { console.error(err); } }
        } else close();
      });
      document.addEventListener('keydown', onKey);
      setTimeout(function () { wrap.classList.add('in'); }, 10);
      var yes = wrap.querySelector('[data-modal="yes"]');
      if (yes) yes.focus();
      // 防止误触：300ms 内不可点
      var mask = wrap;
      mask.style.pointerEvents = 'none';
      setTimeout(function () { mask.style.pointerEvents = ''; }, 220);
      return wrap;
    }
  };

  root.UI = UI;
})(typeof window !== 'undefined' ? window : globalThis);
