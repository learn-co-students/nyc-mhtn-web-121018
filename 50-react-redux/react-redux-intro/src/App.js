import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import Something from './Something';
import DoubleSomething from './DoubleSomething';

class App extends Component {
  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.props.dispatch({ type: "NOT_INCREMENT_COUNTER" })
    // }, 1000)

    // fetch('url')
    //   .then(res => res.json())
    //   .then(data => {
    //     // this.setState({ data: data })
    //     // this.props.dispatch({ type: "what to update", payload: data })
    //   })
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  testDispatch = (event) => {
    console.log('before the dispatch', this.props);
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  render() {
    console.log('let us look at connect:', connect());
    console.log('render', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.testDispatch}>Let's test out Redux dispatch!</button>
        </header>
        <Something name="A" />
        <Something name="B" />
        <Something name="C" />
        <Something name="D" />
        <DoubleSomething name="E" />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   console.log('mapStateToProps', state);
//   return {
//     beef: 'steak',
//     counter: state.counter,
//     chicken: state.counter,
//   }
// }

export default connect()(App);
