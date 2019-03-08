Intro to Redux
==============

## SWBATs

- [ ] Install the redux library so it can be used in a project.
- [ ] Create a `store` in redux with some default `state`.
- [ ] Create a `reducer` to change `state` based on an `action`.
- [ ] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [ ] Read `state` in the `store`.
- [ ] Make a connection b/w Redux and one other concept learned in Mods 1-4 (message passing).

## Objectives

There are two libraries you need to learn to use Redux with React: `redux` && `react-redux`.

- [ ] How do I learn Redux?

**Basics**

1. Understand _message passing_ in the context of Redux.
  * `store`, `createStore`, `store.getState()`, `store.dispatch(action)`, `reducer`
2. Practice with Redux's pattern for _message passing_.
  * Get comfortable with `reducer`, `dispatch`, and `action`s.
  * Practice using Redux's expected patterns.
3. Boilerplate for `react-redux`.
  * `connect()(Component)`
  * `this.props.dispatch({})`
4. Connecting React to Redux.
  * `mapStateToProps`
  * Rendering Redux state in a component.
5. Use Redux to control React.
  * Move `state` to Redux.
  * Replace `setState` with `dispatch`.
  * More `mapStateToProps`.

**Abstractions**

1. Types
2. Action Creators
3. `mapDispatchToProps`
4. `BindActionCreators` pattern for `mapDispatchToProps`
5. Automatic `BindActionCreators`

Along the way, also learn:

* More advanced usage of `mapDispatchToProps`
* `combineReducers`
* `thunk` or other async Redux libraries

**Morning**

- [ ] Learn about `redux`.
- [ ] What is Redux?
- [ ] Why we might use Redux?
- [ ] Do I really have to use Redux?

**Afternoon**

- [ ] Learn about `react-redux`.
- [ ] Prove that Redux can be useful.

## Outline

- [ ] Recap what we know about React
- [ ] What "problems" have you run into in React?
- [ ] Enter Redux
  - [ ] What?
  - [ ] Why?
  - [ ] How?
- [ ] Do I really have to?
- [ ] Prove it to me.
- [ ] FAQ / Q&A

## Vocabulary

My potentially controversial take:

> Redux is as much a test of your English skills as it is a test of your JavaScript skills.

- [ ] Redux
- [ ] state
- [ ] store
- [ ] object tree
- [ ] Single Source of Truth
- [ ] Read-Only
- [ ] Pure Functions
- [ ] Unidirectional Flow
- [ ] getState()
- [ ] dispatch()
- [ ] action
- [ ] plain object
- [ ] type
- [ ] payload
- [ ] reducer
- [ ] pass by reference
- [ ] mutate
- [ ] reduce()
- [ ] Action Creators
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] combineReducers()
- [ ] ALL_THE_CAPS
- [ ] Provider
- [ ] connect()

## Lecture Notes

Redux **will** test your JavaScript knowledge to the **MAX**!!!

### React Recap

**Pain Points**

_Our Pain Points_

State issues
- managing state
- fairly large state
- keeping track of when things were rendering
- passing down many levels just to change something
- multiple components responding to the same state
- sibling components triggers changes
- different pieces of state in different levels
- instances with independent state

_Common Pain Points_ (as said by others)

- When state becomes too big and shared, there's too much lifting & too much refactoring.

Much like what _Fun Fun Functions_ said about Composition over Inheritance:

- you've set your `state`
- app is nicely structured and all good
- but then the boss comes over and says, "let's add this feature!"
- this feature necessitates adding `state` somewhere that needs either:
  - lots of passing around
  - refactoring and moving state around (lifting up, etc.)
- So what are you to do?

Redux. That's what.

- That's when Redux helps the most.
- React == easy and fast to setup, but becomes a pain when it becomes too heavy.
- Redux == slow to setup (boilerplate), but makes to much easier to scale apps.

### Redux Overview

[See slides](https://docs.google.com/presentation/d/1c1Ycvl3-3eMr3Eq-uAn4yU7HHjGuo_eU0PLevAEHUIg/edit?usp=sharing).

Also see:
- [Redux: Motivation](https://redux.js.org/introduction/motivation)
- [Redux: Three Principles](https://redux.js.org/introduction/threeprinciples)
- [Redux: General FAQ](https://redux.js.org/faq/general)
- [Redux: Organizing State](https://redux.js.org/faq/organizingstate#organizing-state-only-redux-state)
- [Redux: Performance Scaling](https://redux.js.org/faq/performance#performance-scaling)

**Key Points**

- What does Redux solve.
- Single Source of Truth: Store
- Read and Writing to the Store
- Pure Functions: Reducers
- Unidirectional Flow
- Common Hurdles of Redux

Catchy phrase I learned from another instructor that might help you understand redux:

> Data down actions up that is how we like to redux.

### Redux Extras

#### Adding Custom Logging to Dispatch

[Watch this video](https://egghead.io/lessons/javascript-redux-wrapping-dispatch-to-log-actions) for an in-depth explanation and more interesting example built out by Dan Abramov.

```javascript
// In index.js after you createStore but before passing to Provider

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("DISPATCH");
    console.log('%c state before dispatch', 'color: red', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c state after dispatch', 'color: blue', store.getState());
    console.groupEnd();
    return returnValue;
  }
}
store.dispatch = addLoggingToDispatch(store);
```

## Resources

[Slides from the lecture!](https://docs.google.com/presentation/d/1c1Ycvl3-3eMr3Eq-uAn4yU7HHjGuo_eU0PLevAEHUIg/edit?usp=sharing)

### How I learned Redux

A lot of the things listed on the official website: [Learning Resources](https://redux.js.org/introduction/learning-resources). Specifically, these really helped me:

_Egghead courses by Dan Abramov:_

- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
  - [Open Source Compilation of Course Notes](https://github.com/tayiorbeii/egghead.io_redux_course_notes)
- [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

_Documentation, specifically these pages:_

- [Redux Docs](https://redux.js.org/)
- [Basics: Usage with React](https://redux.js.org/basics/usage-with-react)
- [FAQ: Do I have to put all my state into Redux? Should I ever use React's setState()?](https://redux.js.org/faq/organizing-state#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate)
- [FAQ: How should I split my logic between reducers and action creators? Where should my “business logic” go?](https://redux.js.org/faq/code-structure#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go)
  - [Github issue discussion on this topic.](https://github.com/reduxjs/redux/issues/1165)

### How I got better at Redux

More courses on Egghead:

- [Pure vs Impure Functions](https://egghead.io/lessons/react-redux-pure-and-impure-functions)
- [Adding custom logging to Dispatch](https://egghead.io/lessons/javascript-redux-wrapping-dispatch-to-log-actions)

More Redux docs:

- [Example Projects (always good to learn from other code)](https://redux.js.org/introduction/examples)
- [FAQ: Code Structure](https://redux.js.org/faq/code-structure)
- [Recipes: Using Object Spread Operator](https://redux.js.org/recipes/using-object-spread-operator)
- [Recipes: Reducing Boilerplate](https://redux.js.org/recipes/reducing-boilerplate)

And just asking questions to understand things better:

- [Is store.dispatch in Redux synchronous or asynchronous](https://stackoverflow.com/questions/43276291/is-store-dispatch-in-redux-synchronous-or-asynchronous)
