#!/bin/bash

# Set the container name and image name
CONTAINER_NAME="my-container"
IMAGE_NAME="node-container"
HOST_PORT=3036

# Build the Podman image
echo "Building the Podman image..."
podman build -t $IMAGE_NAME .

# Check if the container exists (running or stopped)
if podman ps -a --format "{{.Names}}" | grep -q "^$CONTAINER_NAME$"; then
    echo "Container '$CONTAINER_NAME' exists. Removing it..."
    # Stop the container if it's running
    podman stop $CONTAINER_NAME 2>/dev/null
    # Remove the container
    podman rm $CONTAINER_NAME
fi

# Run a new container with the latest image
echo "Creating and starting a new container from the latest image..."
podman run -d -p $HOST_PORT:3036 --name $CONTAINER_NAME $IMAGE_NAME
