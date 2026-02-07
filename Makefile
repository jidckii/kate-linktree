CSS_SRC = docs/assets/css/styles.css
CSS_MIN = docs/assets/css/styles.min.css

.PHONY: minify-css run

minify-css:
	npx clean-css-cli -o $(CSS_MIN) $(CSS_SRC)

run:
	tuna http -s k -f docs
