# Use a lightweight Node image
FROM node:22-slim

# Set environment variables (hot-reloading)
ENV WATCHPACK_POLLING=true

# Set the working directory in the container
WORKDIR /app

# Copy only the dependency list
COPY package*.json .

# Install dependencies
RUN npm install

# App code mounting, port setup and starting command are done in the docker-compose
