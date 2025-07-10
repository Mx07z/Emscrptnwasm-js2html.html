# Use the official lightweight Node.js image
FROM node:18-alpine

# Create and set the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your app's source code
COPY . .

# Expose the port your app runs on (adjust if your server.js uses a different port)
EXPOSE 3000

# Start the app
CMD [ "node", "server.js" ]
