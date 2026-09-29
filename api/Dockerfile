FROM node:18-alpine

WORKDIR /app

# Copy package definitions
COPY package*.json ./

# Install dependencies (including devDependencies needed for compiling TypeScript)
RUN npm install

# Copy source files
COPY . .

# Compile TypeScript into JavaScript (creates the dist folder)
RUN npm run build

ENV PORT=8080

EXPOSE 8080

# Start using npm
CMD ["npm", "start"]
