test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	  --reporter spec --ui bdd --growl
.PHONY: test