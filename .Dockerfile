FROM node:alpine
RUN mkdir -p /apps/node-rest-api/node_modules && chown -R node:node /apps/node-rest-api
WORKDIR /apps/node-rest-api
COPY package*.json ./

USER node
RUN npm ci --only=production

COPY --chown=node:node . .
EXPOSE 4000
CMD [ "node", "server.js" ]
