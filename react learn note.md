<https://github.com/theJian/build-a-hn-front-page>
```sh
npm install -g cnpm --registry=<https://registry.npm.taobao.org>

cnpm install webpack -g 
cnpm install webpack-dev-server -g
cnpm install react react-dom --save 
cnpm install jquery --save cnpm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
```
ex1:
```sh
mkdir -p react/app react/build
cd react
```
```sh
vi webpack.config.js
```
```javascript
var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js' }
}
```
```sh
vi app/app.js
```
```javascript
document.write('It works');
```

vi build/index.html
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<title>Hacker News Front Page</title>
<script src="./bundle.js">
</script>
<br>
```

//打包
```sh
webpack
```
//运行服务器
```sh
webpack-dev-server
```
访问<http://localhost:8080/build/index.html>

npm init -y会按照默认设置生成 package.json, 修改 scripts 的键值如下:

"scripts": { "start": "webpack-dev-server", "build": "webpack" }

ex2:

vi webpack.config.js
```javascript
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js' },
  module: { loaders: [ { test: /.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015','react'] } }, ] }
};
```

vi app.js
```javascript
import $ from 'jquery'; import React from 'react'; import { render } from 'react-dom';

class HelloWorld extends React.Component { render() { return (

<div>Hello World</div>

); } }

render(

<helloworld>, $('#content')[0]);</helloworld>
```

vi index.html
```html
<div id="content">
</div>
<script src="./bundle.js">
</script>
```
