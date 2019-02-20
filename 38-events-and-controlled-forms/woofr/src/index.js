import React from 'react';
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
    LikeButton
    DislikeButton
*/

ReactDOM.render(<App hello="world"/>, document.getElementById('root'));

serviceWorker.unregister();
