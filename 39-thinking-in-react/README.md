Thinking in React
=================

## SWBAT

- [x] Write declarative code using `state` & JSX to reflect the DOM
- [ ] Lift `state` when appropriate
- [x] Refactor React code
- [x] Think in React

## Deliverables

- Add a preview to our add dog form.
- Add an edit dog form.
- Build out Like button and a display page for it.
- Code Review; Refactor if needed.


Step 2 => hard code like crazy
=> slowly pull things out into props

`state` => mutable data => user input, virtual dom, it's whatever is on the screen that changes

() => { this.callback(send, some, data, up) }

### Declarative Programming

**One of the central concepts of React** is that we design our `state` to reflect what we see in the DOM. By doing this, any change in `state` results in a change in the DOM. This results in a _declarative_ style of programming whereby _setting state_ (`setState`) is telling the the application what to change. React then "figures out" what needs to change in the DOM for us.

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

**Metaphor Time!**

**DISCLAIMER:** _This metaphor may confuse you more, so read only if you dare!!_

Think of your React app as a hydroelectric dam made of legos. Your legos are React components. `state` is like the energy / water that can be generated and used by the legos (aka: components). That energy comes in the form of `props`.

Anytime a component needs energy, it can either be from itself (poke a hole in that lego) === the component has `state`.

OR

If multiple components need that energy, you poke a hole in some higher up lego (a container component holding the other components) so it can spill out water (aka: `state`) and give it to its children via `props`.

### Thinking in React

There are no notes for this. Read [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) from the official docs. There is no better guide.
