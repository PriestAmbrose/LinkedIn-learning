`npm init -y
npm install --save-dev mocha chai
npm install --save-dev @babel/core @babel/preset-env @babel/register
npm install --save express
npm install --save-dev supertest
npm install --save-dev regenerator-runtime
npm install mongodb
npm install --save-dev chai-exclude
npm install --save-dev sinon
npm install --save-dev NYC
`
create .babelrc
Inside it:
{
    "presets":["@babel/preset-env"]
}

change in package.json:

"test": "SET NODE_ENV=test |  npx mocha \"src/**/*.test.js\" --recursive --require @babel/register --file src/mocha-setup.js",
"test:watch": "SET NODE_ENV=test |  npx mocha \"src/**/*.test.js\" --recursive --require @babel/register --file src/mocha-setup.js --watch"
  

this is to run the tests automatically


GET -> /users/abc -> {id, username, email} "200" 