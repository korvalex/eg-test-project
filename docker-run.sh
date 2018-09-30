#!/bin/sh

IMAGE="protractor-alpine-image"
NAME="protractor-alpine"

docker run -dit --net=host --pid=host --privileged --name ${NAME} ${IMAGE}
