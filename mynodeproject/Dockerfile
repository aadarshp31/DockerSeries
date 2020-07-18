# step 1 - Get a base image
FROM node:alpine

# step 2 - Setup the working directory
WORKDIR /usr/nodeapp

# step 3 - Bring all the files
# Bring package.json first to intsall the dependencies first to save bandwidth
COPY ./package.json ./

# step 3 - Run installer
RUN npm install
# Since our base image already has the node install, hence we are able to run npm based commands directly.

# COPY all the files to the destination after npm install
COPY ./ ./
# COPY src dest
# src is the relative address wrt the current directory where this dockerfile is located.
# dest is the relative address wrt the current working directory in the DOcker container set in the step 2.



# step 4 - Setup a default command
CMD ["npm", "start"]