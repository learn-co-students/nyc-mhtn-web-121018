import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Component Hierarchy
/*
  App
    Header
    DogCards => list of Cards
      ProfileBio
      ProfilePictures
*/


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
