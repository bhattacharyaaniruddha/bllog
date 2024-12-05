# Use official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your app will run on (adjust if necessary)
EXPOSE 3001

# Command to run your app
CMD ["npx", "nodemon", "app.js"]  # or "npm start" if you use npm start
