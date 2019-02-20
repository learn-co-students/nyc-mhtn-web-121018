import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Card from './Card';

const DOG_PROFILES = [
  {
    src: "https://images.dog.ceo/breeds/pyrenees/n02111500_1170.jpg",
    name: "Fluffy",
    age: 3,
    breed: "pyrenees"
  },
  {
    src: "https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg",
    name: "Bubbles",
    age: 1,
    breed: "cockapoo"
  },
  {
    src: "https://images.dog.ceo/breeds/bluetick/n02088632_1463.jpg",
    name: "Blue",
    age: 10,
    breed: "bluetick"
  }
]

// Component Hierarchy => who is a parent, who is a child, who is a sibling
class App extends Component {
  renderDogCards() {
    return DOG_PROFILES.map(profile => <Card profile={profile} />)
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.renderDogCards() }
        { DOG_PROFILES.map(profile => <Card profile={profile} />) }
        {/*
        <Card profile={DOG_PROFILES[0]} />
        <Card profile={DOG_PROFILES[1]} />
        <Card profile={DOG_PROFILES[2]} />
        */}
      </div>
    );
  }
}

export default App;
