(function () {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    var label = document.getElementById('lang-label');

    function render() {
        label.textContent = document.documentElement.lang === 'zh' ? 'EN' : '中文';
    }

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var next = document.documentElement.lang === 'zh' ? 'en' : 'zh';
        document.documentElement.lang = next;
        try { localStorage.setItem('lang', next); } catch (err) {}
        render();
        // 让 Masonry 卡片布局重新计算（项目/合作页的卡片高度会变）
        window.dispatchEvent(new Event('resize'));
    });

    render();
})();
