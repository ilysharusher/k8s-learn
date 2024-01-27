FROM node:alpine

LABEL authors="Ilya"

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

ENTRYPOINT ["npm", "start"]