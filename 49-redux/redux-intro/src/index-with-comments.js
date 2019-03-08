import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
// create your store

console.log('#1 createStore', createStore); // what's a reducer?

// rule #3 // javascript hoists... I'm going do mod 3 bad

// it's job is to take in arguments
// change state
// return new state
                 // prevState   // what you want it to change to
// the first abstraction to learn for best practice
// the boilerplate
function reducer(state = {}, action) { // this is a PURE function very very PURE super clean, never p[olute this thing]
  console.log('%c reducer', 'color: blue', state, action);
                                // {type: "@@redux/INITe.z.y.4.g.v"}

  // inside the action, we have a type
  // that type is our "route"
  // which means, what do we need in here?
  // giant switch case to decide which "controller action" to do

  return state; // your initial state
}

// mod 1, day 1
// the first time you run this,
// it will execute the reducer,
// get the return value,
// that will be your start (default, intiial) state
const store = createStore(reducer) // make something smaller, minify => .reduce
                     // the naming makes no sense

console.log('#2 after creating store store', store);

// dispatch, getState => two of the functions in this magical store

console.log('#3 getState for intiial state', store.getState());

console.log('#4 store.dispatch', store.dispatch); // this is how you change state

// Rule 1: actions must be POJOs
// Rule 2: actions must have a type key
store.dispatch({ type: "hello" }) // actions MUST be plain objects => POJO
store.dispatch({ type: "hello" })
store.dispatch({ type: "hello" })
store.dispatch({ type: "hello" })
store.dispatch({ type: "hello" })
store.dispatch({ type: "hello" })

console.log('#5 getState for after dispatch', store.getState());

// you will never put this further down in your react app
// we will get there iin mod 5


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
