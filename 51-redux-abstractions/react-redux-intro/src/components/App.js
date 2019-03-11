import React, { Component } from 'react';
import '../assets/css/App.css';
import { connect } from 'react-redux';

import Counter from './Counter';
import DoubledCounter from './DoubledCounter';
import OverTen from './OverTen';
import DoubledOverTen from './DoubledOverTen';

class App extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.dispatch({ type: "DECREMENT_COUNTER" })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  incrementCounter = (event) => {
    console.log('before the dispatch [incrementCounter]', this.props);
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  decrementCounter = (event) => {
    console.log('before the dispatch [decrementCounter]', this.props);
    this.props.dispatch({ type: "DECREMENT_COUNTER" })
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  addFour = (event) => {
    console.log('before the dispatch [addFour]', this.props);
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  resetCounter = (event) => {
    console.log('before the dispatch [resetCounter]', this.props);
    this.props.dispatch({ type: "SET_COUNTER", payload: 0 })
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  render() {
    console.log('let us look at connect:', connect());
    console.log('render', this.props);
    return (
      <div className="App">
        <button onClick={this.incrementCounter}>+1</button>
        <button onClick={this.decrementCounter}>-1</button>
        <button onClick={this.addFour}>+4</button>
        <button onClick={this.resetCounter}>Reset</button>

        <h2>Countdown...</h2>
        <Counter name="Cinnamon" />
        <h2>Doubled Countdown...</h2>
        <DoubledCounter name="Sugar" />
        <h2>Countdown but only over ten...</h2>
        <OverTen name="Socks" />
        <h2>Countdowns Doubles && Over Ten</h2>
        <DoubledOverTen name="Mr. Shuttlesworth" />
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
