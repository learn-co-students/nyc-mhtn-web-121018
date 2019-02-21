import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import JudgementPage from './JudgementPage';
import PreviewDogForm from './PreviewDogForm';
import LikePage from './LikePage';

import DOG_PROFILES from './data'; // API

import uuid from 'uuid';

// when is too much too much
// it depends
// most of those branches in your CH all do something completely separate from each other
// that's when it's too much
// huge hint... when you want to use a new piece of state... but the name exists

// arrays, objs => benchmark it!
// LRU => Least Recently Used cache




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogProfiles: DOG_PROFILES,
      currentDogIndex: 0,
      currentPage: 'judgement',
      likedDogs: DOG_PROFILES.slice(0, 2),
      name: '',
      age: 0,
      breed: '',
      src: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  dislike = () => {
    this.setState({ currentDogIndex: this.state.currentDogIndex + 1 });
    debugger
  }

  like = () => {
    // [...this.state.likedDogs] => making a copy of an array
    // this.state.dogProfiles[this.state.currentDogIndex] => keeping a reference to an {}

    console.log(uuid());
    // this.setState({
    //   likedDogs: [id, id, id],
    //   // database =>
    //   // a duplication of the same exact objects
    //   currentDogIndex: this.state.currentDogIndex + 1
    // }, () => {
    //   console.log(this.state.likedDogs[this.state.likedDogs.length - 1] === this.state.dogProfiles[this.state.currentDogIndex - 1]);
    //   // nothing changed... state didn't change... which means no rerender of the dom
    //   // good thing?
    //   // good
    //   // bad <=
    //   // it depends
    // })

  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  addDog = (event) => {
    event.preventDefault();
    let newProfiles = [...this.state.dogProfiles]; // this.state.dogProfiles.slice();
    console.log(this.state);
    newProfiles.push({ name: this.state.name, age:this.state.age, breed:this.state.breed, src:this.state.src });

    this.setState({ dogProfiles: newProfiles })
  }

  // currentDog => object => but how do we know?!??!
  editDog = (event) => {
    event.preventDefault();
    // // let profile = Object.assign({}, this.state.dogProfiles[0]);
    // let profile = {...this.state.dogProfiles[0]}; // rest operator
    // // stick with the ...
    //
    // profile.age = 100000;
    // this.setState({
    //   dogProfiles: [...this.state.dogProfiles.slice(0,0), profile, ...this.state.dogProfiles.slice(1,end)]
    // })
    debugger
  }

  // do you need both of these handles in here? Or can be move them up?
  handleSubmission = (event) => {

    this.props.handleSubmit(this.state, this.props.currentDogIndex);
    this.props.handleSubmit(this.state);
  }

  renderPage() {
    if (this.state.currentPage === 'judgement') {
      return <JudgementPage currentDogIndex={this.state.currentDogIndex} dogProfiles={this.state.dogProfiles} dislike={this.dislike} like={this.like} />
    } else if (this.state.currentPage === 'add_dog_form') {
      return <PreviewDogForm
        name={this.state.name}
        age={this.state.age}
        breed={this.state.breed}
        src={this.state.src}
        handleChange={this.handleChange}
        handleSubmission={this.addDog}
      />;
    } else if (this.state.currentPage === 'edit_dog_form') {
      // start thinking
      return <PreviewDogForm name={this.state.name} age={this.state.age} breed={this.state.breed} src={this.state.src} index={this.state.currentDogIndex} handleChange={this.handleChange} handleSubmission={this.editDog} />;
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
