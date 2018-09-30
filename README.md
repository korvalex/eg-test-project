# Test project created on demand of 'Evolution Gaming' company.

This automation solution based on [Protractor](https://www.protractortest.org) test framework and [Node.js](https://nodejs.org/en/). It was designed to show example of flexible solution that can handle both end-to-end and functional tests with reusing of the same Page object files and data sets.
Also created simple docker file based on the [Alpine](https://alpinelinux.org) Linux to be able execute tests in virtualized environments.


NOTE: As an improvement could be added separate scripts for test data generation and/or population.


## Building

Navigate to folder:

```
$  cd www.ss.com
```

Install needed dependencies:

```
$ npm install
```

Configure the framework:

```
$ npm run configure
```

Execute end-to-end tests:

```
$ npm run e2e-tests
```

Execute functional tests:

```
$ npm run func-tests
```

Execute all test suites (e2e + func):

```
$ npm run all-tests
```

## HTML and XML reports
Execution reports could be found in ```www.ss.com/test-reports``` folder.


#Dockerized environment


## Building Docker image

```
$ ./docker-build.sh
```

or

```
$ docker build -t [DOCKER_IMAGE_NAME] [PATH_TO_DOCKER_FILE]
```

## Running Docker container

To start docker container:

```
$ ./docker-run.sh
```

Or

```
$ docker run -dit --net=host --pid=host --privileged --name [DOCKER_IMAGE_NAME] [DOCKER_CONTAINER_NAME]
```

## Running Protractor tests:

To execute protractor tests in the docker container:

```
$ docker exec -it [DOCKER_CONTAINER_NAME] /bin/ash -c "npm run all-tests-doc"
```

Example:

```
$ docker exec -it protractor-alpine /bin/ash -c "npm run all-tests-doc"
```
