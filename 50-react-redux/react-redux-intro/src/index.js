import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import { createStore } from 'redux';

// router + controller + model
function reducer(state = { counter: 0 }, action) {
  console.log('%c REDUCER!', 'color: blue', state, action);

  switch(action.type) {
    case "INCREMENT_COUNTER":
      return {...state, counter: state.counter + 1}
    case "NOT_INCREMENT_COUNTER":
      return {...state, counter: state.counter - 1}
    case "SET_COUNT_VALUE":
      return {...state, counter: action.payload}
    case "SET_SET_COUNT":
      return {...state, counter: action.payload.counter}
    default:
      return state;
  }
}

const store = createStore(reducer);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
