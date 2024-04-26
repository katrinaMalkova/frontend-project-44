install:
	npm ci

brain-games:
	node bin/func-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

brain-even:
	node bin/func-even.js
  
brain-calc:
	node bin/func-calc.js
  
brain-gcd:
	node bin/func-gcd.js
  
brain-progression:
	node bin/func-progression.js

brain-prime:
	node bin/func-prime.js
