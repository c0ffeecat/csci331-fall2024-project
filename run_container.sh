#!/bin/bash

# Set the container name and image name
CONTAINER_NAME="my-container"
IMAGE_NAME="node-docker"

# Check if the container is running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Container '$CONTAINER_NAME' is already running. Restarting..."
    docker restart $CONTAINER_NAME
else
    # Check if the container exists but is stopped
    if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
        echo "Container '$CONTAINER_NAME' exists but is stopped. Starting..."
        docker start $CONTAINER_NAME
    else
        # Run a new container if it doesn't exist
        echo "Container '$CONTAINER_NAME' does not exist. Creating and starting..."
        docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
    fi
fi