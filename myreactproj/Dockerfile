## START of First block of Dockerfile

# Naming a our first block as builder-block.
FROM node:alpine as builder-block

# Setting Working Directory.
WORKDIR /var/myreactapp

# Copying package.json to container working directory.
COPY ./package.json ./

# Installing dependencies using package.json file.
RUN npm install

# Copying the rest of the files to container working directory.
COPY ./ ./

# Running the build process for our project 
# to generate production ready files from our Source code.
RUN npm run build

# The dockerfile code block end when it sees another 'FROM' keyword
## END of First block of Dockerfile
