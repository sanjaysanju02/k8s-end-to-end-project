# Use official Node.js image
FROM node:14

# Set working directory inside the container
WORKDIR /sanjau
# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application source code
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight HTTP server to serve the frontend
RUN npm install -g serve

# Expose port 3000 (for frontend)
EXPOSE 3000

# Serve the React application
CMD ["serve", "-s", "build", "-l", "3000"]

