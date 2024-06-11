#!/bin/bash

# Check if a container with the same name already exists
if [ "$(docker ps -aqf name=$CONTAINER_NAME)" ]; then
  # If a container with the same name exists, stop and remove it
  docker stop ${COMPOSE_PROJECT_NAME}
  docker rm ${COMPOSE_PROJECT_NAME}
fi

# Start your application
exec "$@"
