/* ===========================================================
 * 启动入口
 * =========================================================== */
(function () {
  'use strict';

  function boot() {
    if (!window.Engine || !window.Store || !window.UI) {
      var app = document.getElementById('app');
      if (app) {
        app.innerHTML = '<div class="fatal"><h1>加载失败</h1><p>引擎脚本未能加载，请确认 js/ 目录完整。</p></div>';
      }
      return;
    }
    window.addEventListener('error', function (e) {
      if (window.console && console.error) console.error('[app]', e.message);
    });
    Engine.boot();
    UI.init();
    if (!Engine.ready()) {
      UI.go('fatal');
      return;
    }
    UI.go('home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
