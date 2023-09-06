ARG API_HOST

FROM node:18-alpine3.18

WORKDIR /my_beautiful_todo_app

COPY . .

RUN npm install

ARG API_HOST
ENV API_HOST=$API_HOST

RUN npm run build

WORKDIR /my_beautiful_todo_app/build

EXPOSE 3000

CMD [ "node", "index.js" ]
