# Select a base image to start with
FROM node:18-alpine

# Create application working directory
# This is your location inside the container
WORKDIR /mtumba_bay

# Copy dependency files
COPY ./client/package.json ./client/yarn.lock ./

# Install dependencies
RUN yarn install

# Bundle app sources
COPY . .

# Make port accessible outside the container
EXPOSE 5173

# Command to run when container is ready
CMD [ "yarn", "dev" ]
