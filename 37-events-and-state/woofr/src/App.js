import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Card from './Card';

import DOG_PROFILES from './data';
// var counter = 0; // please do not do this

class App extends Component {
  // iof you want any data that mutates => put it in state
  constructor(props) {
    super(props);

    // this is where you setup your default state
    // state is for data that changes => mutates
    this.state = {
      counter: 0 // what to default to\
    } // it's always an object

    // this.dislike = this.dislike.bind(this) // you will see this
  }

  // // class field declarations => stage 3 proposal in ECMAscript
  // state = {
  //   counter: 0,
  //   beef: "food"
  // }

  renderDogCards() {
    return DOG_PROFILES.map(profile => <Card profile={profile} />)
  }

  // dislike() {
  //   console.log('did i run?', this); // undefined?
  //   console.log("Dislike before state", this.state)
  //   // this.state = { counter: this.state.counter + 1 } // bad, it doesn't trigger a rerender
  //   this.setState({ counter: this.state.counter + 1}, () => { console.log('inside callback', this.state)}) // async
  //
  //   console.log("Dislike after state change", this.state)
  //   // Object.assign({}, this.state, { counter: this.state.counter + 1})
  //   // oldState === newState // false
  // }

  dislike = () => {
    console.log('did i run?', this); // undefined?
    console.log("Dislike before state", this.state)
    // this.state = { counter: this.state.counter + 1 } // bad, it doesn't trigger a rerender
    for (let i = 0; i < 2; i++) {
      /// this will batch => async
      this.setState((currentState) => {
        return { counter: currentState.counter + 1 }
      }, () => { console.log('inside callback', this.state)}) // async
    }
    // this.forceUpdate();

    // console.log('app', this.props);
    // this.props.hello = "world 2"
    // console.log('app', this.props); // arguments => children dont tell their parents what to do

    console.log("Dislike after state change", this.state)
    // Object.assign({}, this.state, { counter: this.state.counter + 1})
    // oldState === newState // false
  }

  // when to abstract into a component?
  // do it when it starts to make sense

  // doesn't all this magic have a cost? => figured it out
  // Dislike => card gone
  // Like => card added to a like list
  render() {
    // translate to React.createElement
    console.log('render last', this.state);
    return (
      <div className="App">
        <Header />
        {/* this.renderDogCards() */}
        <Card profile={DOG_PROFILES[this.state.counter]} />
        <button onClick={this.dislike}>Growl</button> {/* Dislike */}
        <button onClick={() => { console.log("Like") }}>Woof</button> {/* Like */}
      </div>
    );
  }
}

export default App;
