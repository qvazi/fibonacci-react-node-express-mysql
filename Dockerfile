FROM node:slim
WORKDIR /usr/src/app
COPY /client client/
RUN cd client && npm install --production
RUN cd client && npm run build
COPY /server server/
RUN cd server && npm install --production
EXPOSE 8080
CMD node server/server.js