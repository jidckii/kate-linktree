console.log("scripts loaded");

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
    element.style.backgroundColor = '#593425';
    
    setTimeout(() => {
        element.querySelector('span').textContent = originalText;
        element.style.backgroundColor = '';
    }, 1500);
}
