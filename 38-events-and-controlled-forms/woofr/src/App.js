import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Card from './Card';

import DOG_PROFILES from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogProfiles: DOG_PROFILES,
      currentDogIndex: 0,
    }
  }

  dislike = () => {
    this.setState({ currentDogIndex: this.state.currentDogIndex + 1 });
  }

  like = () => {
    console.log("Like");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Card profile={this.state.dogProfiles[this.state.currentDogIndex]} />
        <button className="swipe-button" onClick={this.dislike}>Growl</button> {/* Dislike */}
        <button className="swipe-button" onClick={this.like}>Woof</button> {/* Like */}
      </div>
    );
  }
}

export default App;
