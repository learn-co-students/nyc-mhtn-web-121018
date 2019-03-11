import React, { Component } from 'react';
import '../assets/css/App.css';
import { connect } from 'react-redux';

import Counter from './Counter';
import DoubledCounter from './DoubledCounter';
import OverTen from './OverTen';
import DoubledOverTen from './DoubledOverTen';

import { increment, decrement, setCounter } from '../actions';

class App extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
//       this.props.dispatch(decrement())
      this.props.decrement();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // actionCreators are to create actions => POJO
  incrementCounter = (event) => {
    console.log('before the dispatch [incrementCounter]', this.props);
    // // this.props.dispatch(increment())
    this.props.increment(); // normal react, pass down a callback to change state in parent through props
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  decrementCounter = (event) => {
    console.log('before the dispatch [decrementCounter]', this.props);
//     this.props.dispatch(decrement())
    this.props.decrement();
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  addFour = (event) => {
    console.log('before the dispatch [addFour]', this.props);
//     this.props.dispatch(increment()) // react is declartive
//     this.props.dispatch(increment())
//     this.props.dispatch(increment()) // silent error
//     this.props.dispatch(increment())
    this.props.quadrupleIncrement();
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  resetCounter = (event) => {
    console.log('before the dispatch [resetCounter]', this.props);
//     this.props.dispatch(setCounter(0))
    this.props.resetCounter();
    console.log('after the dispatch', this.props); // wont rerender until done
  }

  setCounter = () => {
    this.props.setCounter(100);
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

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    beef: 'steak',
    counter: state.counter,
    chicken: state.counter,
  }
}

// desired result
function mapDispatchToProps(dispatch) {
  return {
    // this.props.dispatch(increment())
    // increment: () => { dispatch(increment()) }
    increment: () => dispatch(increment()),
    quadrupleIncrement: () => {
      dispatch(increment())
      dispatch(increment())
      dispatch(increment())
      dispatch(increment())
    },
    decrement: () => dispatch(decrement()),
    resetCounter: () => dispatch(setCounter(0)),
    setCounter: (counter) => dispatch(setCounter(counter))
    // beefy: "steaky",
    // dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
