import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Component Hierarchy
/*
  App <- up here for deciding what page to render
    Header
      JoinButton <== helps decide what to render

    if
      DogCards => list of Cards
        ProfileBio
        ProfilePictures
      LikeButton
      DislikeButton
    else
      AddDogForm
*/

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
