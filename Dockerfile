FROM node:20.10.0-alpine

WORKDIR /app

COPY package.json package-lock.json /app

RUN npm install

COPY . /app

COPY NeshanMapboxGl.css /app/node_modules/@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css

RUN npm run build

RUN npm install http-server-spa -g

EXPOSE 6297