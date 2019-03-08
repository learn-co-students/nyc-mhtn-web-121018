import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

// one of the nice parts about Redux is that most components end up functional
class App extends Component {

  testDispatch = (event) => {
    // be your way of changing state
    this.props.dispatch({ type: "INCREMENT_COUNTER" }) // action
    // replaces:
    // setState({ })
  }

  render() {
    console.log('let us look at connect:', connect());
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.props.chicken}</h1>
          <button onClick={this.testDispatch}>Let's test out Redux dispatch!</button>
        </header>
      </div>
    );
  }
}

// connect is a function
// mapStateToProps as the first argument
// we will learn about mapDispatchToProps next week

// connect looks like a function that returned a new function
// higher order function
// this new function takes in WrappedComponent which means
// it is a higher order component
// const HOC = connect()
// export default HOC(App);

// this component will not be notified
// if you want to be notified, you must write a mapStateToProps

// it might map
// state to props
// just javascript
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    beef: 'steak',
    counter: state.counter,
    chicken: state.counter,
  }
}

// if no props change, redux won't make the componet rerender

export default connect(mapStateToProps)(App);
