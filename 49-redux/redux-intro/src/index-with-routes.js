import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import { createStore } from 'redux';

// router + controller + model
function reducer(state = { counter: 0 }, action) {
  console.log('%c REDUCER!', 'color: blue', state, action);

  // 1. increment the counter => increment_counter
  // if (action.type === "increment_counter") {
  //   // what is the rule about
  //   let newState = {...state} // Object.assign({}, state) // make a copy, tip: make state as shallow as possible
  //   newState.counter++
  //   return newState
  // } else if (action.type === "not_increment_counter") {
  //   // 2. decrement the counter => not_increment_counter
  //   let newState = {...state}
  //   newState.counter--
  //   return newState
  // }
  // 3. set the counter to a new value

  switch(action.type) {
    case "increment_counter":
      return {...state, counter: state.counter + 1}
    case "not_increment_counter":
      return {...state, counter: state.counter - 1}
    case "set_count_value":
      // return {...state, counter: action.params}
      return {...state, counter: action.payload}
    default:
      return state;
  }


  // return state; // for anything that doesn't match
}

const store = createStore(reducer)
console.log('%c #1 Initial state after createStore', 'color: pink', store.getState());

// FETCH!      // url, => params
store.dispatch({ type: "increment_counter" })
console.log('%c #2 state after dispatch', 'color: green', store.getState());

store.dispatch({ type: "not_increment_counter" })
console.log('%c #3 state after dispatch', 'color: green', store.getState());

// store.dispatch({ type: "set_count_value", params: "tim" })
store.dispatch({ type: "set_count_value", payload: "tim" }) // payload is the conventional way to send "params" to our reducer
console.log('%c #3 state after dispatch', 'color: green', store.getState());

// store.dispatch({ type: "hello" })
// store.dispatch({ type: "hello" })
// store.dispatch({ type: "hello" })
// store.dispatch({ type: "hello" })
// store.dispatch({ type: "hello" })











ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
