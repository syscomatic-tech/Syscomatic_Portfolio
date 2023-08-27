# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the Next.js application code to the container's working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the Next.js application is listening
EXPOSE 3001

# Command to run your Next.js application in production mode
CMD ["npm", "start"]
