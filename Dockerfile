# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all source code
COPY . .

# Build the project (if using a build step)
RUN npm run build

# Expose the port your app runs on
EXPOSE 5000

# Start the application
CMD