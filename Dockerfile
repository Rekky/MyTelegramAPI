FROM node:21

WORKDIR /app

COPY ./app /app

RUN npm cache clean --force

RUN npm install