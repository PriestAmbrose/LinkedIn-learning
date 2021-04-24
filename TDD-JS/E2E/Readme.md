`npm init -y
npm install --save-dev mocha chai
npm install --save-dev @babel/core @babel/preset-env @babel/register
npm install --save express
npm install --save-dev supertest
npm install --save-dev regenerator-runtime
npm install mongodb
npm install --save-dev chai-exclude
`
create .babelrc
Inside it:
{
    "presets":["@babel/preset-env"]
}

change in package.json:

"test": "npx mocha \"src/**/*.test.js\" --recursive --require @babel/register  --file src/mocha-setup.js"


GET -> /users/abc -> {id, username, email} "200" 