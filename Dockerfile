FROM node:12.18.1
 
WORKDIR /app

# Install SQLite and build tools
RUN apt-get update && apt-get install -y \
    sqlite3 \
    libsqlite3-dev \
    build-essential \
    python

 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .
 
CMD [ "npm", "run", "start" ]