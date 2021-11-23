FROM node:12-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

# RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node . .

RUN npm run build

RUN npm install

CMD node server/index.js

EXPOSE 3001