import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import JudgementPage from './JudgementPage';
import AddDogForm from './AddDogForm';

import DOG_PROFILES from './data'; // API

class App extends Component {
  constructor(props) {
    super(props);

    // state is a representation of your data in the browser
    this.state = {
      dogProfiles: DOG_PROFILES,
      currentDogIndex: 0,
      currentPage: 'judgement', // 'add_dog_form'
    }

    this.dislike = this.dislike.bind(this);
  }

  dislike() {
    this.setState({ currentDogIndex: this.state.currentDogIndex + 1 });
  }

  like = () => {
    console.log("Like");
  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  addDog = ({ name, age, breed, selfie}) => {
    console.log('addDog');
    // javascript is not ruby => methods return whacky things

    // this.state.dogProfiles.push({ name, age, breed, src }) // returns a number, doin;'t change it directly'
    let newProfiles = [...this.state.dogProfiles] // this.state.dogProfiles.slice()
    newProfiles.push({ name, age, breed, src: selfie })

    // // pass by referrnce vs pass by value => obj, array
    // let a = []
    // let b = []
    // a === b // false
    //
    // let a = []
    // let b = a
    // a === b // true

    this.setState({ dogProfiles: newProfiles }, () => {
      console.log(this.state);
    })
  }


  renderPage() {
    if (this.state.currentPage === 'judgement') {
      // we abstracted, so now we need one wrapping div... or let's not do that
      // Fragment
      return <JudgementPage currentDogIndex={this.state.currentDogIndex} dogProfiles={this.state.dogProfiles} dislike={this.dislike} like={this.like} />
    } else if (this.state.currentPage === 'add_dog_form') {
      return <AddDogForm addDog={this.addDog} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
