`npm init -y
npm install --save-dev mocha chai
npm install --save-dev @babel/core @babel/preset-env @babel/register
`
create .babelrc
Inside it:
{
    "presets":["@babel/preset-env"]
}

change in package.json:

"test": "npx mocha \"src/**/*.test.js\" --recursive --require @babel/register"