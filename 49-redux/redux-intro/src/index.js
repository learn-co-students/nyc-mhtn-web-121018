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
    case "INCREMENT_COUNTER": // by convention, make these all CAPS
      return {...state, counter: state.counter + 1}
    case "NOT_INCREMENT_COUNTER":
      return {...state, counter: state.counter - 1}
    case "SET_COUNT_VALUE":
      return {...state, counter: action.payload}
    case "SET_SET_COUNT":
      // return {...state, counter: action.payload.counter}
      // return {...state, counter: action.payload.counter}
      return {...state, ...action.payload} // Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

const store = createStore(reducer)
console.log('%c #1 Initial state after createStore', 'color: pink', store.getState());

// FETCH!      // url, => params
store.dispatch({ type: "INCREMENT_COUNTER" })
console.log('%c #2 state after dispatch', 'color: green', store.getState());

store.dispatch({ type: "NOT_INCREMENT_COUNTER" })
console.log('%c #3 state after dispatch', 'color: green', store.getState());

// store.dispatch({ type: "set_count_value", params: "tim" })
store.dispatch({ type: "SET_COUNT_VALUE", payload: "tim" }) // payload is the conventional way to send "params" to our reducer
console.log('%c #3 state after dispatch', 'color: green', store.getState());

store.dispatch({ type: "SET_SET_COUNT", payload: { counter: "tim" } })











ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
