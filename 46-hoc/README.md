React Higher Order Component (HOC)
==================================

## Objectives

- Why? Some background:
  - Factory Pattern
  - Composition vs Inheritance
- Higher Order Functions
- Higher Order Components
- withRouter
- withLoading
- withAd

## Resources

- [Composition over Inheritance (Fun Fun Function)](https://www.youtube.com/watch?v=wfMtDGfHWpA)
- [Composition vs Inheritance (React Docs)](https://reactjs.org/docs/composition-vs-inheritance.html)

## Lecture Notes

What to understand about HOCs:

1. Understand that you need to pass props along
  - If you take a component, and then render it in a new component, you lose props.
2. The thing you return is a new class Component
  - React will use this to render a component.
  - That's why you can put it in a variable.
  - Also why you can just export it.
3. What to abstract???
  - What functionality do I need to add in multiple components?
  - withRouter: need a way to get all that router goodness in components that aren't in a Route
  - Loading: we had a ton of components that needs to load data when rendered
  - Ads: advertisements, tracking you to the ends of the Earth
  - Auth: something that redirects when not authed
4. Just practice.
  - Steps 1, 2 will sink in quickly.
  - Step 3 is the harder one and that's ok!

### withRouter (LogoutButton)

[`withRouter` documentation](https://reacttraining.com/react-router/web/api/withRouter)

```javascript
import React from 'react';
import { withRouter } from 'react-router'
import Adapter from './Adapter';

const LogoutButton = ({ to = "/login", history }) => (
  <button
    className="logout-button"
    onClick={() => {
      Adapter.logout();
      history.push(to);
    }}
  >
    Logout
  </button>
)

export default withRouter(LogoutButton);
```

### withLoading

```javascript
import React from 'react';

// Explanation
// ===========
// Higher Order Components can take more than just another
// component as args/params.
// The common pattern we want to abstract in withLoading
// is the idea that we need to:
//     do a setState after a fetch in componentDidMount
// That's what we'll abstract away here and instead
// of rendering an empty array, we'll show a loading gif instead!

// To Test It
// ==========
// Throw a byebug in the controller actions for snacks and my snacks.
// While in byebug, we should see the loading GIF.
// If you then type `continue` in byebug to continue with the action,
// data should be sent back and we should see our loading component!

// dataLoader should be a Promise that we can run in componentDidMount.
// It's result is the data we will now pass down as props into
// our component. That way, the component can initialize state with
// data without ever having to render [] or do anything with componentDidMount.
function withLoading(WrappedComponent, dataLoader) {
  return class extends React.Component {
    state = {
      isLoading: true,  // Until this is flipped, we show the GIF.
      data: null,       // Eventual data we get back from dataLoader
    }

    // What we've now abstracted.
    componentDidMount() {
      dataLoader()
        .then(data => { // <-- Got our data back.
          this.setState({ data }, () => { // <-- Set our data.
             // In callback.
             // data is set, so let's flip the switch and render WrappedComponent
            this.isLoaded();
          });
        });
    }

    // Method to flip the switch.
    isLoaded = () => {
      this.setState({
        isLoading: false,
      })
    }

    render() {
      // Show a GIF while not loaded.
      if (this.state.isLoading) {
        // return <p>Spinny GIF</p>
        // I found a spinny gif!
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        // If we get here, then this.state.data has something to pass down.
        // So we pass it down as a prop called initialData.
        // Every component that uses this HOC will get some initialData.
        return <WrappedComponent {...this.props} initialData={this.state.data} />
      }
    }
  }
}

export default withLoading;
```

### withAd

```javascript
import React, { Component } from 'react'
import Ad from '../Ad'

function withAd(WrappedComponent, trackedElements = ['A', 'BUTTON']) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.trackedElements = trackedElements;

      this.state = {
        clicks: 0,
  			showAd: false,
      }
    }

    toggleAd = () => {
  		this.setState({
  			showAd: !this.state.showAd
  		})
  	}

    adTracker = () => {
      this.setState({
        clicks: this.state.clicks + 1,
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
  		if (this.state.clicks === 3 && !this.state.showAd) {
  			this.setState({
  				clicks: 0,
  				showAd: true
  			})
  		}
    }

    // onClick and onClickCapture both work; they just behave slightly differently
    // See:
    //   https://reactjs.org/docs/events.html#supported-events
    //   https://stackoverflow.com/questions/34522931/example-for-bubbling-and-capturing-in-react-js
    handleClickCapture = (event) => {
      // debugger;
      // console.log('tracking user actions', event.nativeEvent, event.target.tagName, event.target.nodeName, event.target.className);

      if (this.trackedElements.includes(event.target.nodeName)) {
        this.adTracker();
      }
    }

    render(){
      if (this.state.showAd) {
  			return <Ad toggleAd={this.toggleAd} />
      } else {
        return (
          <div onClickCapture={this.handleClickCapture}>
            <WrappedComponent {...this.props} adTracker={this.adTracker} />
          </div>
        )
      }
    }
  }
}

export default withAd;
```
