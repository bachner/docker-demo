# docker-demo
## script for the session

Prerequisites: 
- apt install nodejs-legacy

Setup:
- git clone https://github.com/bachner/docker-demo.git
- cd app
- npm install

Steps:
- npm start

- cd .. (Back to the project-root directory)

- docker build -f docker/Dockerfile -t bachner/docker-demo --build-arg HTTP_PROXY=http://proxy.il.hpecorp.net:8080 --build-arg HTTPS_PROXY=http://proxy.il.hpecorp.net:8080 .

- docker images

- docker run -d -p 18080:6060 --rm --name ofer-app bachner/docker-demo:latest

- docker logs <CONTAINER_ID>

- docker network create --driver overlay ofer-network

- docker service create --name ofer-app -p 18080:6060 --network ofer-network -d bachner/docker-demo
