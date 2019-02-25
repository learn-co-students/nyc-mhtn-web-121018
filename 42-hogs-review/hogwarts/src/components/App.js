import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';

import Nav from './Nav';
import CardList from './CardList';

import hogs from '../porkers_data';

class App extends Component {
  state = {
    hogs: [],
  }

  componentDidMount() {
    // safe to change state after creation here
    this.setState({
      // hogs.map(hog => hog) // implicit return
      // hogs.map(hog => {}) // cannot implicitly return an object
      // hogs: hogs.map(hog => {...hog, id: uuid()});
      hogs: hogs.map(hog => {
        return {...hog, id: uuid()};
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <CardList hogList={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
