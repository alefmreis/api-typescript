# API - Typescript

npm install typescript
npm install ts-node
npm install -D nodemon


Settings to nodemon watch the Application

{
  "watch": "src",
  "ext": "ts",
  "ignore": [],
  "exec": "ts-node ./src/server.ts"
}


Install es-lint dependecies to Typescript project

npm install -D eslint
npm install -D @typescript-eslint/eslint-plugin
npm install -D @typescript-eslint/parser

Create a file called .eslintrc.js to specify the eslint settings

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
};

After that, it's needed to configurate the startup to dev and prod.

Add the follow configurations at package.json scripts
"dev": "nodemon",
"prod": "tsc && node dist/server.js"

