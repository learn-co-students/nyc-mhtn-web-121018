import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// looks like HTML, but is it?
// is there an HTML tag called App?
ReactDOM.render(<h1>hello world asdfasdf</h1>, document.getElementById('root'));

// arrow functions, let const vs var

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// npm vs npx =>
// old way of installing and running:
// npm install -g create-react-app
// create-react-app woofr
