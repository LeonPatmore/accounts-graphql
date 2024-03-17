start-mongo:
	docker-compose -f mongo-compose.yaml up -d

run-users:
	export NODE_DEBUG=http && export "GRAPH_QL_FILE=./graphs/users.graphql" && export PORT=4000 && npx ts-node index.ts

run-accounts:
	export "GRAPH_QL_FILE=./graphs/accounts.graphql" && export PORT=4002 && npx ts-node index.ts

fmt:
	npx prettier . --write

compose-supergraph:
	export MSYS_NO_PATHCONV=1 && docker run -v $(pwd)/generated:/app/output --rm $(docker build -q .) supergraph compose --elv2-license=accept --config /app/supergraph-config.yaml --output /app/output/supergraph.graphql

run-super:
	npx ts-node index-super-graph.ts
