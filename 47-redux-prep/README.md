Redux Prep => Reflect on your time at Flatiron
==========

## SWBATs

Take what they learned in Mods 1 through 4 and use them as examples to explain these concepts in programming:

- [ ] message passing
- [ ] abstraction
- [ ] layers
- [ ] APIs

## Lecture Overview

[**Message Passing**](https://en.wikipedia.org/wiki/Message_passing) per Wikipedia:

> message passing is a technique for invoking behavior (i.e., running a program) on a computer. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.


state = {}

<!-- setState
build out message passing -->

//
function setState(message) { // object
  // we dont have to understand how it does it
  // it just does
  state = Object.assign(state, message)
}


state = {
  counter: 0,
  obama: "michelle",
  mike: "cheng",
  evans: "wang",
  sugar: true,
}


// what would message be?
// how would the inside of setState look?

setState("change_evans", "ya boi")
setState("change_mike", "the great and powerful...")

// redux is this same exact concept
// how many of you had different ideas to start?
1. the base is the same
everyone starts abstracting in different ways...
- what i will make you slowly practice and build yp to

function setState(message, yaBoi) { // it will do something based on the type of message it gets
  // 1. increments the counter
  // 2. decrements the counter
  // 3. renames obama to trump // ouch
  // 4. toggles sugar
  // if else / switch

  // 5. change evans to anything else
  // 6. change mike to anything else

  // you API => routes => instance/class methods => attrs_ => DOM API
  switch(message) {
    case "increment_counter":
      state.counter++;
      break;
    case "decrement_counter":
      state.counter--;
      break;
    case "anarchy":
      state.obama = "trump";
      break
    case "dinner":
      state.sugar = !state.sugar

    case "change_evans":
      state.evans = yaBoi
      break;
    case "change_mike":
      state.mike = yaBoi //why...
      break;
  }
}


setState({ counter: 1})










1. Message passing is a technique for invoking behavior (i.e., running a program) on a computer.
  - Message passing is a technique for getting the computer to do something.
2. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run.
  - Send a message to X, trusts that X will do what it's told to do.
3. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.
  - No separate methods. Just one method to rule them all.

ruby run.rb
rails s =>
npm start => package.json

Ruby Syntactic Sugar => passing "message" to a method to execute something
- yes
- c1.send(:name=, "changine it")


request response lifecycle
- message passing
- wher eyou need to go => dopmain => ip => route
- information => params
- MVC


fetch(url (route), { body: data })

rendering to a page => DOM to render something?
DOM manipulation => nodes, elements, innerHTML


r-r => state => setState({}) => state changing


Everything boils down to:

* message passing
  * methods, functions
  * OOP => `.send()`
  * request <---> response
  * setState
* abstraction
  * helper methods
  * OOP => inheritance
  * factory pattern
  * higher order functions
  * higher order components
* layers
  * OOP => encapsulation
  * ORM
  * MVC
  * DOM
  * Components
* APIs
  * class & instance methods
  * RESTful routes
  * JS * the DOM
  * Adapter Pattern
