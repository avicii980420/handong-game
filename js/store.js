/* ===========================================================
 * 《汉东风云 · 行测突围》 存档与成长系统
 * 纯前端，localStorage 持久化；不可用时自动降级为内存存档。
 * =========================================================== */
(function (root) {
  'use strict';

  var KEY = 'handong-xingce-save-v1';

  var MODULES = ['言语理解与表达', '数量关系', '判断推理', '资料分析', '常识判断'];

  var RANKS = [
    { name: '科员', min: 0, seal: '员' },
    { name: '副科级', min: 120, seal: '副' },
    { name: '正科级', min: 300, seal: '科' },
    { name: '副处级', min: 550, seal: '处' },
    { name: '正处级', min: 850, seal: '正' },
    { name: '副厅级', min: 1250, seal: '厅' },
    { name: '正厅级', min: 1750, seal: '厅' },
    { name: '副部级', min: 2400, seal: '部' }
  ];

  var memRaw = null;

  function rawGet() {
    try {
      if (root.localStorage) return root.localStorage.getItem(KEY);
    } catch (e) { /* 隐私模式等 */ }
    return memRaw;
  }
  function rawSet(v) {
    memRaw = v;
    try {
      if (root.localStorage) root.localStorage.setItem(KEY, v);
    } catch (e) { /* 忽略写入失败 */ }
  }
  function rawDel() {
    memRaw = null;
    try {
      if (root.localStorage) root.localStorage.removeItem(KEY);
    } catch (e) { /* ignore */ }
  }

  function emptyModuleStats() {
    var o = {};
    MODULES.forEach(function (m) { o[m] = { answered: 0, correct: 0 }; });
    return o;
  }

  function defaults() {
    return {
      version: 1,
      createdAt: Date.now(),
      player: { name: '林远', title: '汉东省检察院反贪局侦查员' },
      score: 0,        // 政绩
      morale: 20,      // 民心
      unlocked: 1,     // 已解锁到第几章
      chapterProgress: {},
      clues: [],
      stats: {
        answered: 0,
        correct: 0,
        modules: emptyModuleStats(),
        story: { answered: 0, correct: 0 },
        practice: { answered: 0, correct: 0 },
        exam: { papers: 0, answered: 0, correct: 0, best: 0 },
        bestCombo: 0
      },
      seen: {},        // qid -> { c, w, last }
      techStats: {},   // tech -> { answered, correct, module }
      wrongBook: [],   // { qid, chosen, at, module }
      practice: { sessions: 0, best: 0, totalSeconds: 0 },
      settings: { sound: true, typewriter: true, fontScale: 1 },
      ending: null,
      endingAt: null
    };
  }

  function normalize(raw) {
    var d = defaults();
    var s = (raw && typeof raw === 'object') ? raw : {};
    var out = Object.assign({}, d, s);
    out.player = Object.assign({}, d.player, s.player || {});
    out.stats = Object.assign({}, d.stats, s.stats || {});
    out.stats.modules = Object.assign({}, d.stats.modules, (s.stats && s.stats.modules) || {});
    MODULES.forEach(function (m) {
      var mm = out.stats.modules[m] || {};
      out.stats.modules[m] = { answered: +mm.answered || 0, correct: +mm.correct || 0 };
    });
    out.stats.story = Object.assign({}, d.stats.story, (s.stats && s.stats.story) || {});
    out.stats.practice = Object.assign({}, d.stats.practice, (s.stats && s.stats.practice) || {});
    out.stats.exam = Object.assign({}, d.stats.exam, (s.stats && s.stats.exam) || {});
    out.settings = Object.assign({}, d.settings, s.settings || {});
    out.chapterProgress = Object.assign({}, s.chapterProgress || {});
    out.seen = Object.assign({}, s.seen || {});
    out.techStats = Object.assign({}, s.techStats || {});
    // 技巧标签改名迁移：ABRX四要素 → 增长率四要素
    if (out.techStats['ABRX四要素'] && !out.techStats['增长率四要素']) {
      out.techStats['增长率四要素'] = out.techStats['ABRX四要素'];
    }
    delete out.techStats['ABRX四要素'];
    out.wrongBook = Array.isArray(s.wrongBook) ? s.wrongBook.slice(0, 300) : [];
    out.clues = Array.isArray(s.clues) ? s.clues : [];
    out.practice = Object.assign({}, d.practice, s.practice || {});
    out.unlocked = Math.min(6, Math.max(1, parseInt(s.unlocked, 10) || 1));
    out.score = Math.max(0, +s.score || 0);
    out.morale = Math.min(100, Math.max(0, +s.morale || 0)) || 20;
    return out;
  }

  var Store = {
    MODULES: MODULES,
    RANKS: RANKS,
    KEY: KEY,
    state: null,
    hasLocalStorage: (function () {
      try { return !!(root.localStorage && root.localStorage.setItem); } catch (e) { return false; }
    })(),

    load: function () {
      var raw = rawGet();
      var parsed = null;
      if (raw) {
        try { parsed = JSON.parse(raw); } catch (e) { parsed = null; }
      }
      Store.state = normalize(parsed);
      return Store.state;
    },

    save: function () {
      if (!Store.state) return;
      try { rawSet(JSON.stringify(Store.state)); } catch (e) { /* ignore */ }
    },

    reset: function () {
      Store.state = defaults();
      rawDel();
      Store.save();
      return Store.state;
    },

    hasSave: function () {
      var raw = rawGet();
      if (!raw) return false;
      try {
        var s = JSON.parse(raw);
        if (!s) return false;
        return !!(
          s.unlocked > 1 ||
          Object.keys(s.chapterProgress || {}).length ||
          Object.keys(s.seen || {}).length ||
          (s.score || 0) > 0 ||
          (s.clues || []).length
        );
      } catch (e) { return false; }
    },

    rankFor: function (score) {
      var idx = 0;
      for (var i = 0; i < RANKS.length; i++) if (score >= RANKS[i].min) idx = i;
      var cur = RANKS[idx];
      var next = RANKS[idx + 1] || null;
      var span = next ? next.min - cur.min : 1;
      var done = next ? (score - cur.min) / span : 1;
      return {
        index: idx,
        name: cur.name,
        seal: cur.seal,
        min: cur.min,
        next: next ? next.name : null,
        nextMin: next ? next.min : null,
        toNext: next ? Math.max(0, next.min - score) : 0,
        progress: Math.max(0, Math.min(1, done))
      };
    }
  };

  root.Store = Store;
})(typeof window !== 'undefined' ? window : globalThis);
