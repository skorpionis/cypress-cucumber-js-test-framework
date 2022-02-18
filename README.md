# cypress-cucumber-js-test-framework
Test framework

There is test task for deinbett.de website wich uses cucumber + js + cypress

Usage
I used node v17.4.0:

nvm i v17.4.0
nvm use v17.4.0
If you just cloned this repo, install the dependencies:

to start cypress runner enter this command below into terminal $bash

node_modules/.bin/cypress open

Part 1 - Setup Cypress
First, build choose repo where you want cypress.

Next, initialze a project and created a package.json file.

npm init
Install cypress
npm install cypress --save-dev

You can run cypress tests like this

node_modules/.bin/cypress open

Cucumber tool
Installed the "cypress-cucumber-preprocessor":
npm i cypress-cucumber-preprocessor --save-dev
Then go to cypress/plugins/index.js and, bring in the cucumber function with require and add a line in my so that that line so that cypress knows to use this cucumber preprocessor:

var cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};

Create Feature Folder With Feature Files
Create a folder named "features" within cypress/integration and place feature files there containing gherkin.

Create Step_Definitions Folder With Step Definition Files
Create a folder "step_definitions" within cypress/support and place step definition files there. Use /cypress/support/step_definitions/deinbett-steps.js as a template.

For me it was very important to put the things above in these specific directories since these were the only locations where my files were actually found and run properly by cypress & cucumber.

To run docker:
if image was already created

docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:9.4.1 --spec cypress/integration/*.feature --browser chrome 

if dockerFile exists

docker build -t my-cypress-image:1.1.0 .
docker run -i -v ${PWD}:/cypress-cucumber-js-test-framework -t my-cypress-image:1:0:0 --spec cypress/integration/*.feature
