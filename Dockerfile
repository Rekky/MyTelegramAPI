FROM node:21

WORKDIR /app

COPY ./app /app

RUN npm install

RUN npm install ajv-formats