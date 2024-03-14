start-mongo:
	docker-compose -f mongo-compose.yaml up -d

run:
	npx ts-node .\index.ts

fmt:
	npx prettier . --write
