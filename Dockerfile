# Builder
FROM cypress/browsers:node14.17.0-chrome91-ff89
RUN mkdir /cypress-cucumber-js-test-framework
WORKDIR /cypress-cucumber-js-test-framework

COPY . /package.json
COPY . /cypress.json.
COPY . /cypress

RUN npm install
ENTRYPOINT [ "npx", "cypress", "run" ]
CMD [ "" ]