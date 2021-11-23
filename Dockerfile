FROM node:12-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

# RUN npm ci --only=production && npm cache clean --force

RUN npm build && npm install

COPY --chown=node:node . .

CMD node server/index.js

EXPOSE 3001