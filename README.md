docker build -t your_dockerhub_username/demo-node-js-app .

docker run --name demo-node-js-app -p 3001:3001 -d your_dockerhub_username/demo-node-js-app

docker exec -it demo-node-js-app sh

docker kill $(docker ps -q); docker rm $(docker ps -a -q);
