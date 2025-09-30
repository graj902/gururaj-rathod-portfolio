# Stage 1: Build the application
# Use the official Node.js 18 image as a base
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies (including devDependencies needed for the build)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
RUN npm run build


# Stage 2: Create the final, smaller production image
# Use a minimal Node.js image for the final container
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Set environment variable to run in production mode
ENV NODE_ENV=production

# Copy package.json and package-lock.json again
COPY package*.json ./

# Install ONLY the production dependencies
RUN npm install --omit=dev

# Copy the built application from the 'builder' stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the Next.js app runs on (default is 3000)
EXPOSE 3000

# The command to start the application
CMD ["npm", "start"]