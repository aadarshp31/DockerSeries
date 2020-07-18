# step 1 - get a base image
# We are using alpine linux base image as it is very small image
FROM alpine

# step 2 - install a software

# --> updating repository file for the cdn link of specific alpine versions.
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/main" >> /etc/apk/repositories
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/community" >> /etc/apk/repositories

# --> similar to 'apt-get update' in ubuntu but for alpine.
RUN apk update

# --> installing MongoDB with specific version and specific revision.
RUN apk add mongodb=3.4.4-r0

# --> instaling another program to test the caching concept
RUN apk add binutils

# step 2.5 - configure that software

# --> Created a Volume for the MongoDB to be installed on.
VOLUME [ "/data/db" ]

# --> Setting up the default working directory for this service.
WORKDIR /data

# --> Setting Port for the MongoDB.
EXPOSE 27017

# --> instaling another program after adding 'binutils' to test the caching concept once again 
RUN apk add isl

# step 3  - set default commands
CMD [ "mongod" ]