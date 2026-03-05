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

// Всплывашка донатов
(function() {
    const SHOW_DELAY = 1000; // 1 секунда после загрузки

    const toast = document.getElementById('donate-toast');
    const closeBtn = document.getElementById('donate-close');

    if (!toast || !closeBtn) return;

    // Показываем всплывашку через задержку
    setTimeout(() => {
        toast.hidden = false;
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });
    }, SHOW_DELAY);

    // Закрытие по кнопке
    closeBtn.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.hidden = true;
        }, 400);
    });
})();
