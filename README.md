# phaser-webpack-babel-eslint-setup

The purpose of this repo is to provide a checklist of steps for a basic setup for a project with phaser, eslint, webpack, and babel.

At the time of writing, the versions of each package are what is listed in the package.json.

___
## **Steps:**

**Initialize npm**

- `npm init -y`

**Install dependencies**

- `npm i phaser`

**Install dev dependencies**

- `npm i -D eslint webpack webpack-cli`


**Eslint setup**

- `eslint --init`

- I choose to use a popular style guide (airbnb) and say yes when it asks if I want to install dependencies now. It will install eslint-config-airbnb-base and eslint-plugin-import.

- Update .eslintrc.json with "env" and "globals" fields.

**Webpack setup**

- remove "main" field from package.json

- add "private" field to package.json => `"private": true,`

- `mkdir src dist`

- `touch src/index.js`

- `touch dist/index.html`

- `touch webpack.config.js`

- paste code into dist/index.html and src/index.js and webpack.config.js

- add script to package.json => `"build": "webpack"`