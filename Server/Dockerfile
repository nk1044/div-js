FROM node:slim

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY index.js /app/index.js
COPY config /app/config
COPY models /app/models
COPY app.js /app/app.js
COPY routes /app/routes
COPY controllers /app/controllers
COPY Output /app/Output

COPY .env /app/.env

EXPOSE 3000
EXPOSE 9000

CMD ["npm", "start"]