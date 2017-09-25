# PIE Website

## How to Build

1. Build the image:

> docker build -t \<username\>/pie-web-app .

2. Run the image in a container as a daemon:

> docker run -p 49160:8080 -d \<username\>/pie-web-app

## How to Remove Old Builds

You should remove old builds frequently to avoid wasting space.

1. Stop any containers that are running:

> docker stop $(docker ps -a -q)

2. Remove all containers:

> docker rm $(docker ps -a -q)

3. Find the ID of the \<username\>/pie-web-app image:

> docker images

4. Remove the image using its ID \<pie-web-app-id\>:

> docker rmi \<pie-web-app-id\>

## Dependencies

- [Docker](https://www.docker.com/)
