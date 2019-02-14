# phaser-webpack-babel-eslint-setup

To provide a checklist of steps for setting up a project with phaser, eslint, webpack, and babel.

___
## **Steps:**

**Initialize npm**

`npm init -y`


**Install dev dependencies**

`npm i -D eslint webpack webpack-cli`


**Eslint setup**

`eslint --init`

update .eslintrc.json (I use airbnb style)

**Webpack setup**

remove "main" field from package.json

add "private" field to package.json => `"private": true,`

`mkdir src`

`touch src/index.js`

`touch index.html`

add webpack.config.js


