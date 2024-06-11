#!/bin/bash

# Check if a container with the same name already exists
if [ "$(sudo docker ps -aqf name=$CONTAINER_NAME)" ]; then
  # If a container with the same name exists, stop and remove it
  sudo docker stop ${COMPOSE_PROJECT_NAME}
  sudo docker rm ${COMPOSE_PROJECT_NAME}
fi

# Start your application
exec "$@"
