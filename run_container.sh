#!/bin/bash

# Set the container name and image name
CONTAINER_NAME="my-container"
IMAGE_NAME="node-container"
HOST_PORT=3000

# Build the Docker image
echo "Building the Docker image..."
docker build -t $IMAGE_NAME .

# Check if the container exists (running or stopped)
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Container '$CONTAINER_NAME' exists. Removing it..."
    # Stop the container if it's running
    docker stop $CONTAINER_NAME 2>/dev/null
    # Remove the container
    docker rm $CONTAINER_NAME
fi

# Run a new container with the latest image
echo "Creating and starting a new container from the latest image..."
docker run -d -p $HOST_PORT:3000 --name $CONTAINER_NAME $IMAGE_NAME