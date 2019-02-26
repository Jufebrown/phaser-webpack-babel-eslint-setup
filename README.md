# phaser-webpack-babel-eslint-setup

## **General Notes**
The purpose of this repo is to provide a checklist of steps for a basic setup for a project with phaser, eslint, webpack, and babel. For information on on the various configuration options, please consult the docs:
- [eslint](https://eslint.org/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [phaser](https://phaser.io/)

This project was influenced by a couple of tutorials:
- [A Modern Web Development Setup For Phaser 3](https://snowbillr.github.io/blog//2018-04-09-a-modern-web-development-setup-for-phaser-3/)
- [Getting Started in Phaser 3 (ES6) – Create a Boomdots game](http://codetuto.com/2018/02/getting-started-phaser-3-es6-create-boomdots-game//)

Unfortunately, even though these tutorials are fairly recent, there are are some things in both that have been deprecated in relation to webpack and babel. Also, I wanted a reference that covered the 'what' more than the 'why'. If you want to understand why things are done the way they are, I encourage you to go through both tutorials as well as reading the 'getting started' portions of the documentation above.

At the time of writing, the versions of the project dependencies are what is listed in the package.json file.

You can either fork this repo and modify it to suit your needs or follow the steps below.

___
## **Steps**

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
- paste code from this repo into dist/index.html
- paste code from this repo into src/index.js
- paste code from this repo into webpack.config.js
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
- `touch scenes/GameScene.js`
- paste code from this repo into TitleScene.js
- paste code from this repo into GameScene.js

**Build and Serve**

- `npm run dev`
- navigate to localhost:8080 in your browser to see the game