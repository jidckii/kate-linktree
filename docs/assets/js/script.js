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
