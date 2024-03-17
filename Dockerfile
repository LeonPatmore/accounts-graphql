FROM worksome/rover

WORKDIR /app
COPY graphs /app/graphs
COPY supergraph-config.yaml supergraph-config.yaml
