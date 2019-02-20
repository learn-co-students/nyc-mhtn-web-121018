import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Card from './Card';

import DOG_PROFILES from './data';

class App extends Component {
  renderDogCards() {
    return DOG_PROFILES.map(profile => <Card profile={profile} />)
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.renderDogCards() }
      </div>
    );
  }
}

export default App;
