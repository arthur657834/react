cd app
touch NewsList.js NewsHeader.js NewsItem.js

vi NewsHeader.js
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

vi NewsItem.js
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

vi NewsList.js
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

vi app.js
import React from 'react'
import { render } from 'react-dom';
import $ from 'jquery';
import NewsList from './NewsList.js';

render(<NewsList />, $('#content')[0]);