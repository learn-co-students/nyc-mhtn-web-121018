import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import JudgementPage from './JudgementPage';
import AddDogForm from './AddDogForm';
import EditDogForm from './EditDogForm';
import LikePage from './LikePage';

import DOG_PROFILES from './data'; // API

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogProfiles: DOG_PROFILES,
      currentDogIndex: 0,
      currentPage: 'judgement',
      likedDogs: DOG_PROFILES.slice(0, 2)
    }
  }

  dislike = () => {
    this.setState({ currentDogIndex: this.state.currentDogIndex + 1 });
  }

  like = () => {
    console.log("Like");
    // always make a copy => .slice(), [...]
    // that's not perfect
    this.setState({
      likedDogs: [...this.state.likedDogs, this.state.dogProfiles[this.state.currentDogIndex]],
      currentDogIndex: this.state.currentDogIndex + 1
    })

  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  addDog = (name, age, breed, src) => {
    let newProfiles = [...this.state.dogProfiles]; // this.state.dogProfiles.slice();
    newProfiles.push({ name, age, breed, src });

    this.setState({ dogProfiles: newProfiles })
  }

  // currentDog => object => but how do we know?!??!
  editDog = (currentDog, index) => {
    // edit that dog
  }

  renderPage() {
    if (this.state.currentPage === 'judgement') {
      return <JudgementPage currentDogIndex={this.state.currentDogIndex} dogProfiles={this.state.dogProfiles} dislike={this.dislike} like={this.like} />
    } else if (this.state.currentPage === 'add_dog_form') {
      return <AddDogForm addDog={this.addDog} />;
    } else if (this.state.currentPage === 'edit_dog_form') {
      // start thinking
      return <EditDogForm index={this.state.currentDogIndex} editDog={this.editDog} />;
    } else if (this.state.currentPage === 'liked') {
      return <LikePage likedDogs={this.state.likedDogs} />
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
