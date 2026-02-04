# use the base image for docker hub
FROM node:20-alpine

# set the working directory
WORKDIR /app

# copy the package.json and package-lock.json files
COPY package*.json ./

# install the dependencies
RUN npm install

#copy the rest of the application code
COPY . .

# Expose the port your app will run on
EXPOSE 5173
