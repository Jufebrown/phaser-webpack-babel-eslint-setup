# phaser-webpack-babel-eslint-setup

The purpose of this repo is to provide a checklist of steps for a basic setup for a project with phaser, eslint, webpack, and babel. For information on on the various configuration options, please consult the docs:
- [eslint](https://eslint.org/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [phaser](https://phaser.io/)

At the time of writing, the versions of each package are what is listed in the package.json.

You can either fork this repo and modify it to suit your needs or follow the steps below.

___
## **Steps:**

**Initialize npm**

- `npm init -y`

**Install Dependencies**

- `npm i phaser @babel/polyfill`

**Install Dev Dependencies**

- `npm i -D eslint webpack webpack-cli webpack-dev-server style-loader css-loader file-loader @babel/core @babel/cli @babel/preset-env babel-loader`


**Eslint Setup**

- `eslint --init`
- I choose to use a popular style guide (airbnb) and say yes when it asks if I want to install dependencies now. It will install eslint-config-airbnb-base and eslint-plugin-import.
- Update .eslintrc.json with "env" and "globals" fields.

**Webpack Setup**

- remove "main" field from package.json
- add "private" field to package.json => `"private": true,`
- `mkdir src dist`
- `touch src/index.js`
- `touch dist/index.html`
- `touch webpack.config.js`
- paste code into dist/index.html and src/index.js and webpack.config.js
- add scripts to package.json
  ```
  "build": "webpack",
  "dev": "webpack-dev-server"
  ```

**Babel Setup**

- `touch babel.config.js`
- paste code into babel.config.js
- This project uses babel-loader which allows some of the presets to be set right in the webpack.config.js. I'm not sure if it makes the babel.config.js unnecessary.

**Phaser Setup**

- `mkdir scenes`
- `touch scenes/TitleScene.js`
- paste code into TitleScene.js