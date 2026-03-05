// Проверка поддержки WebP
(function() {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        if (webP.height !== 2) {
            document.documentElement.classList.add('no-webp');
        }
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
})();

const yearDate = new Date().getFullYear().toString();
document.querySelector(".year").innerText = yearDate;

// Карточки «Ещё рисую» — toggle по тапу на тач-устройствах
(function() {
    var cards = document.querySelectorAll('.library-card--soon');
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function(e) {
            e.stopPropagation();
            var wasActive = this.classList.contains('library-card--active');
            // Закрыть все открытые
            var active = document.querySelectorAll('.library-card--active');
            for (var j = 0; j < active.length; j++) {
                active[j].classList.remove('library-card--active');
            }
            if (!wasActive) this.classList.add('library-card--active');
        });
    }
    document.addEventListener('click', function() {
        var active = document.querySelectorAll('.library-card--active');
        for (var j = 0; j < active.length; j++) {
            active[j].classList.remove('library-card--active');
        }
    });
})();

// Библиотека — загрузить ещё
(function() {
    var btn = document.getElementById('library-more');
    if (!btn) return;

    btn.addEventListener('click', function() {
        var hidden = document.querySelectorAll('.library-card--hidden');
        for (var i = 0; i < hidden.length; i++) {
            hidden[i].classList.remove('library-card--hidden');
        }
        btn.style.display = 'none';
    });
})();

