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

// Копирование в буфер обмена
const copyLink = document.getElementById('instagram-handle');
if (copyLink) {
    copyLink.addEventListener('click', function(e) {
        e.preventDefault();
        const textToCopy = this.getAttribute('data-copy');
        
        // Используем современный API Clipboard
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyFeedback(this);
            }).catch(err => {
                console.error('Ошибка копирования:', err);
            });
        } else {
            // Fallback для старых браузеров
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showCopyFeedback(this);
            } catch (err) {
                console.error('Ошибка копирования:', err);
            }
            document.body.removeChild(textArea);
        }
    });
}

// Визуальная обратная связь о копировании
function showCopyFeedback(element) {
    const originalText = element.querySelector('span').textContent;
    element.querySelector('span').textContent = 'Скопировано в буфер обмена!';
    element.style.backgroundColor = '#515464';

    setTimeout(() => {
        element.querySelector('span').textContent = originalText;
        element.style.backgroundColor = '';
    }, 1500);
}

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
