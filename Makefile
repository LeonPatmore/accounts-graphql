start-mongo:
	docker-compose -f mongo-compose.yaml up -d

run-static-account:
	export NODE_DEBUG=http && npx ts-node graphs/accounts/static/index.ts

rsa: run-static-account

run-tokens-account:
	export NODE_DEBUG=http && npx ts-node graphs/accounts/tokens/index.ts

rta: run-tokens-account

run-business-account:
	export NODE_DEBUG=http && npx ts-node graphs/accounts/business/index.ts

rba: run-business-account

fmt:
	npx prettier . --write

compose-supergraph:
	export MSYS_NO_PATHCONV=1 && docker run -v $$(pwd)/generated:/app/output --rm $$(docker build -q .) supergraph compose --elv2-license=accept --config /app/supergraph-config.yaml --output /app/output/supergraph.graphql

cs: compose-supergraph

run-super:
	npx ts-node graphs/super/index.ts

rs: run-super
