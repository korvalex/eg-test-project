#!/bin/sh

IMAGE="protractor-alpine-image"

docker image rm -f ${IMAGE} > /dev/null 2>&1
docker build -t ${IMAGE} .
