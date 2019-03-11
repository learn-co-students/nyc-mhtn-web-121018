import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// router + controller + model
function reducer(state = { counter: 0 }, action) {
  console.log('%c REDUCER!', 'color: blue', state, action);

  switch(action.type) {
    case "INCREMENT_COUNTER":
      return {...state, counter: state.counter + 1}
    case "DECREMENT_COUNTER":
      return {...state, counter: state.counter - 1}
    case "SET_COUNTER":
      return {...state, counter: action.payload}
    default:
      return state;
  }
}

const store = createStore(reducer);

// this provides access to the store to your react app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
