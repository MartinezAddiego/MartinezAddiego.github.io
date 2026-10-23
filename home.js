/* Florencia Martinez Addiego: homepage + Background page scripts */

(function () {
    /* ---------- Rotating tagline (homepage) ----------
       The first phrase is already in the HTML, so nothing is blank if this
       script doesn't run. Edit the phrases below to change what rotates. */
    var el = document.getElementById('tagline-text');
    var phrases = [
        'Cognitive computational neuroscientist',
        'Postdoctoral fellow',
        'Always learning (mostly caffeinated)'
    ];
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (el && !reduceMotion) {
        var p = 0;
        var n = phrases[0].length;
        var deleting = true;

        var tick = function () {
            if (deleting) {
                n--;
                el.textContent = phrases[p].slice(0, n);
                if (n === 0) {
                    deleting = false;
                    p = (p + 1) % phrases.length;
                    setTimeout(tick, 300);
                    return;
                }
                setTimeout(tick, 35);
            } else {
                n++;
                el.textContent = phrases[p].slice(0, n);
                if (n === phrases[p].length) {
                    deleting = true;
                    setTimeout(tick, 2200);
                    return;
                }
                setTimeout(tick, 60);
            }
        };

        setTimeout(tick, 2200);
    }

    /* ---------- Mobile menu ---------- */
    var menuBtn = document.getElementById('menu-btn');
    var menu = document.getElementById('nav-links');

    if (menuBtn && menu) {
        var closeMenu = function () {
            menu.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        };

        menuBtn.addEventListener('click', function () {
            var open = menu.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(open));
        });

        menu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') closeMenu();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    /* ---------- Tabs (Background page) ----------
       Without JavaScript, all three panels simply show stacked. */
    var tablist = document.querySelector('[role="tablist"]');

    if (tablist) {
        var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));

        var select = function (tab) {
            tabs.forEach(function (t) {
                var on = t === tab;
                t.setAttribute('aria-selected', String(on));
                t.tabIndex = on ? 0 : -1;
                document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
            });
        };

        tabs.forEach(function (tab, i) {
            tab.addEventListener('click', function () { select(tab); });

            tab.addEventListener('keydown', function (e) {
                if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
                var step = e.key === 'ArrowRight' ? 1 : -1;
                var next = tabs[(i + step + tabs.length) % tabs.length];
                next.focus();
                select(next);
            });
        });

        select(tabs[0]);
    }
})();
