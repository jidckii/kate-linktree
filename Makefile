.PHONY: build clean help force

# Выходная директория
DIST_DIR := dist

# Исходные файлы
CONFIG := config.yml
THEME_FILES := $(shell find themes -type f 2>/dev/null)
GENERATE_SCRIPT := generate_site.py

# Целевой файл (индикатор сборки)
TARGET := $(DIST_DIR)/index.html

# Все зависимости
DEPS := $(CONFIG) $(THEME_FILES) $(GENERATE_SCRIPT)

# Основная цель: собрать сайт если есть изменения
build: $(TARGET)

$(TARGET): $(DEPS)
	@echo "Обнаружены изменения, генерация сайта..."
	python3 generate_site.py
	@echo "Сайт успешно сгенерирован!"

# Принудительная сборка (игнорируя изменения)
force:
	@echo "Принудительная генерация сайта..."
	python3 generate_site.py
	@echo "Сайт успешно сгенерирован!"

# Очистка сгенерированных файлов
clean:
	@echo "Очистка директории $(DIST_DIR)..."
	rm -rf $(DIST_DIR)
	@echo "Очистка завершена!"

# Справка
help:
	@echo "Доступные команды:"
	@echo "  make build  - Сгенерировать сайт (только если были изменения)"
	@echo "  make force  - Принудительно сгенерировать сайт (игнорируя изменения)"
	@echo "  make clean  - Удалить сгенерированные файлы"
	@echo "  make help   - Показать эту справку"
