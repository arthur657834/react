cd app
touch NewsList.js NewsHeader.js NewsItem.js

vi NewsHeader.js
```javascript
import React from 'react';

export default class NewsHeader extends React.Component {
  render() {
    return (
        <div className="newsHeader">
          I am NewsHeader.
        </div>
        );
  }
}
```

vi NewsItem.js
```javascript
import React from 'react';

export default class NewsItem extends React.Component {
  render() {
    return (
        <div className="newsItem">
          I am NewsItem.
        </div>
        );
  }
}
```

vi NewsList.js
```javascript
import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';

export default class NewsList extends React.Component {
  render() {
    return (
        <div className="newsList">
          <NewsHeader />
          <NewsItem />
        </div>
        );
  }
}
```

vi app.js
```javascript
import React from 'react'
import { render } from 'react-dom';
import $ from 'jquery';
import NewsList from './NewsList.js';

render(<NewsList />, $('#content')[0]);
```

http://localhost:8080/build/index.html

cnpm install url-loader file-loader --save-dev


vi webpack.config.js
```javascript
# loaders add
{    
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
}
```

vi NewsHeader.js
```javascript
import imageLogo from '../images/y18.gif';

getLogo() {
 return (
    <div className="newsHeader-logo">
      <a href="https://news.ycombinator.com/"><img src={imageLogo} /></a>
    </div>
    );
}

getTitle() {
 return (
     <div className="newsHeader-title">
       <a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
     </div>
     );
}
```
cnpm install css-loader style-loader --save-dev
vi webpack.config.js
```javascript
#add
{
 test: /\.css$/,
 loader: 'style-loader!css-loader'
}
```

vi NewsHeader.css
.newsHeader {
 align-items: center;
 background: #ff6600;
 color: black;
 display: flex;
 font-size: 10pt;
 padding: 2px;
}

.newsHeader-logo {
 border: 1px solid white;
 flex-basis: 18px;
 height: 18px;
}

.newsHeader-textLink {
 color: black;
 text-decoration: none;
}

.newsHeader-title {
 font-weight: bold;
 margin-left: 4px;
}

vi app.css
body {
 font-family: Verdana, sans-serif;
}

vi NewsHeader.js
```javascript
import './NewsHeader.css';
```

vi app.js
```javascript
import './app.css'
```
