dev-env-up: ## Starts all docker containers that are necessary to run the service locally.
	docker-compose -f docker-compose.yml up -d 

dev-env-stop: ## Stops all docker containers that are necessary to run the service locally.
	docker-compose -f docker-compose.yml stop

dev-env-cleanup: dev-env-stop ## Removes all docker containers that are necessary to run the service locally. This can be used when one or more docker containers have an unwanted state.
	docker-compose -f docker-compose.yml rm -f

run:
	node src/app.js