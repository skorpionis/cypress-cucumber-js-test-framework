# Builder
FROM cypress/browsers:node14.17.0-chrome91-ff89

WORKDIR /app
COPY . .
RUN npm i
RUN ./node_modules/.bin/cypress install