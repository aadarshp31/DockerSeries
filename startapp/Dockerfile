# Base image
FROM node:alpine

# Setting working directory
WORKDIR /usr/startapp

# First copy and install dependencies
COPY ./package.json ./
RUN npm install

# Copy everything else left in the folder | Same as ./ ./
COPY . .

# Default command to run the project
CMD [ "npm", "start" ]