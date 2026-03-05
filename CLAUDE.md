# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Проект

Linktree-сайт для художницы Кати (kate.am). Статический HTML/CSS/JS без фреймворков, хостится на GitHub Pages из папки `docs/`.

## Команды

```bash
make run            # Локальный сервер (tuna http -s k -f docs)
make minify-css     # Минификация CSS → styles.min.css (npx clean-css-cli)
```

После изменений в `styles.css` нужно запускать `make minify-css`. В `index.html` подключён минифицированный `styles.min.css`.

## Архитектура

Весь сайт — три файла в `docs/`:
- `index.html` — единственная страница, подключает CDN (Google Fonts, Font Awesome)
- `assets/css/styles.css` — стили с CSS-переменными в `:root`, Flexbox-раскладка, брейкпоинт 480px
- `assets/js/script.js` — WebP-детект, копирование ника в буфер, popup донатов, год в footer

Минифицированные версии (`styles.min.css`, `script.min.js`) хранятся в git и используются в продакшене.

## CSS-переменные

```css
--primary-color: #DACDC0
--background-color: #888D7D
--text-color: #ffffff
--link-color: #65684B
```

## Деплой

Push в `master` → GitHub Pages автоматически обновляет `kate.am` (CNAME в `docs/`).
