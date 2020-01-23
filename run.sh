docker-compose -f docker/docker-compose.yml up --build
docker exec almundo-back "npm run populate-db"