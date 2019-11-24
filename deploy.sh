docker rm -f api-typescript
docker rmi api_typescript -f
docker build . -t api_typescript:latest
docker compose up -d
