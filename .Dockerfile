FROM node:alpine
WORKDIR /apps/node-rest-api
#COPY --chown=node:node . /apps/node-rest-api/package*.json ./

COPY --chown=node:node . .
RUN npm install --only=production
USER node
EXPOSE 4000
CMD [ "node", "./dist/server.js" ]
