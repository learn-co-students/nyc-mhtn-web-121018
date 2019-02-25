import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';

import Nav from './Nav';
import CardList from './CardList';

import hogs from '../porkers_data';

// hog images =>
// 1. move to public and create them src strings
// 2. import all files and use an object that maps between names to the file
//    {
//   string_of_name: require(image)
// }
// 3. all got one image => skipped this

class App extends Component {
  state = {
    hogs: [],
  }

  componentDidMount() {
    // safe to change state after creation here
    // as if this was coming from an API

    // let newHogs = [...hogs];
    // newHogs.forEach(hog => hog["id"] = uuid());

    this.setState({
      // hogs.map(hog => hog) // implicit return
      // hogs.map(hog => {}) // cannot implicitly return an object
      // hogs: hogs.map(hog => {...hog, id: uuid()});
      // this.setState({ hogs: newHogs });

      // [{} {} {}] => [{ + id}, { + id}]
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
