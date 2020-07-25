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

## START of Second block of Dockerfile
FROM nginx as nginx-block

# Exposing port 80 as nginx serves at port 80
EXPOSE 80

# referencing the first block to access the build folder in the container 'builder-block'.
COPY --from=builder-block ./var/myreactapp/build ./usr/share/nginx/html

## END of First block of Dockerfile
