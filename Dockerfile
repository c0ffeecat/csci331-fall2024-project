FROM node:20-bullseye

WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    sqlite3 \
    libsqlite3-dev \
    build-essential \
    python3

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

CMD [ "npm", "run", "start" ]