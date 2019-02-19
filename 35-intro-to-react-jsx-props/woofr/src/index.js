import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// looks like HTML, but is it?
// is there an HTML tag called App?

/*
  1. Header
  2. Card
  3. ProfilePictures
  4. ProfileBio
  5. LikeButton
  6. DislikeButton
  7. App => entire page
*/

/*
  JSX
  - what you want to render has to be under a single parent element
  - OR put them in an array
  - OR render nothing
  - React.createElement(...)

  - HTML attributes are used exactly as is (kinda),
  - but there are some that conflict with reserved  keywords in JS
  - class => className
  - for => htmlFor
  - but are also camelCased
  - except for:
  - data-attributes
  - aria-attributes

  For abstracting JSX into a component:
  - you can use them as if they were HTML tags IF they are captialized
  - all lower cased ones are assumed to be actual HTML tags
  - one way is functional
  - another is class <= stick with this for now
*/


// Component Hierarchy
/*
  App
    Header
    DogCards => list of Cards
      ProfileBio
      ProfilePictures
*/


ReactDOM.render(
<App />
, document.getElementById('root'));

// arrow functions, let const vs var

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// npm vs npx =>
// old way of installing and running:
// npm install -g create-react-app
// create-react-app woofr
