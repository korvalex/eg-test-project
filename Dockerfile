FROM weboaks/node-karma-protractor-chrome:alpine
MAINTAINER korv.qa@gmail.com

ENV PROTRACTOR_TESTS /protractor
USER root

#================================================
# Update dependecies.
#================================================
RUN    apk update \
	&& apk upgrade \
    && apk add --update openjdk8-jre tzdata curl unzip bash \
    && cp /usr/share/zoneinfo/Europe/Rome /etc/localtime \
    && echo "Europe/Rome" >  /etc/timezone \
	&& rm -rf /var/cache/apk/* \
    && mkdir -p ${PROTRACTOR_TESTS}

#================================================
# Copy repo.
#================================================
COPY   www.ss.com ${PROTRACTOR_TESTS}/www.ss.com

#================================================
# Install test framework dependecies.
#================================================
RUN    cd ${PROTRACTOR_TESTS}/www.ss.com \
    && npm install \
    && npm run configure

#================================================
# Define working directory.
#================================================
WORKDIR ${PROTRACTOR_TESTS}/www.ss.com
