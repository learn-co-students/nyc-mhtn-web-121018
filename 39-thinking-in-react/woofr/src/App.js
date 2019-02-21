import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import JudgementPage from './JudgementPage';
import AddDogForm from './AddDogForm';

import DOG_PROFILES from './data'; // API

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogProfiles: DOG_PROFILES,
      currentDogIndex: 0,
      currentPage: 'judgement',
    }
  }

  dislike = () => {
    this.setState({ currentDogIndex: this.state.currentDogIndex + 1 });
  }

  like = () => {
    console.log("Like");
  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  addDog = (name, age, breed, src) => {
    let newProfiles = [...this.state.dogProfiles]; // this.state.dogProfiles.slice();
    newProfiles.push({ name, age, breed, src });

    this.setState({ dogProfiles: newProfiles })
  }

  renderPage() {
    if (this.state.currentPage === 'judgement') {
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
