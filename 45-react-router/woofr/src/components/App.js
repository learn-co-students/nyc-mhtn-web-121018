import React, { Component } from 'react';
import '../assets/css/App.css';

import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import JudgementPage from './JudgementPage';
import PreviewDogForm from './PreviewDogForm';
import LikePage from './LikePage';

import DogAdapter from '../apis/DogAdapter';

class App extends Component {
  state = {
    dogProfiles: [],
    currentPage: 'judgement',
    likedDogProfiles: [],
    currentDogIndex: 0,
    id: '',
    name: '',
    age: 0,
    breed: '',
    src: '',
  }

  componentDidMount() {
    DogAdapter.getDogs()
      .then(res => res.json())
      .then(dogProfiles => this.setState({ dogProfiles }));
    DogAdapter.getLikedDogs()
      .then(res => res.json())
      .then(likedDogProfiles => this.setState({ likedDogProfiles }));
  }

  dislike = () => {
    this.setState((prevState) => {
      return { currentDogIndex: this.state.currentDogIndex + 1 };
    });
  }

  like = () => {
    const newLikedDog = this.state.likedDogProfiles[this.state.currentDogIndex];
    if (!!this.state.likedDogProfiles.find(dog => dog.id === newLikedDog.id)) {
      this.setState((prevState) => {
        return { currentDogIndex: this.state.currentDogIndex + 1 };
      });
    } else {
      this.setState((prevState) => {
        return {
          currentDogIndex: prevState.currentDogIndex + 1,
          likedDogProfiles: [...prevState.likedDogProfiles, newLikedDog],
        };
      });
    }
  }

  handlePageChange = (page) => {
    if (page === 'add_dog_form') {
      this.setState({
        id: '',
        name: '',
        age: 0,
        breed: '',
        src: '',
        currentPage: page,
      });
    } else if (page === 'edit_dog_form') {
      const currentDog = this.state.dogProfiles[this.state.currentDogIndex];
      // Each dog object should look like: { id, name, age, breed, src }
      // So this should destructure and overwrite the correct things in state.
      this.setState({
        ...currentDog,
        currentPage: page,
      });
    } else {
      this.setState({ currentPage: page });
    }
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addDog = (event) => {
    event.preventDefault();

    const { name, age, breed, src } = this.state;
    const dogProfile = { name, age, breed, src };

    DogAdapter.addDog(dogProfile)
      .then(res => res.json())
      .then(dogProfile => {
        const dogProfiles = [...this.state.dogProfiles, dogProfile];
        this.setState({
          dogProfiles,
          currentPage: 'judgement',
         });
      });
  }

  editDog = (event) => {
    event.preventDefault();

    const { id, name, age, breed, src } = this.state;
    const dogProfile = { id, name, age, breed, src };

    DogAdapter.editDog(dogProfile)
      .then(res => res.json())
      .then(dogProfile => {
        const dogProfiles = this.state.dogProfiles.map(dog => {
          if (dog.id === dogProfile.id) {
            return dogProfile;
          }
          return dog;
        });
        this.setState({
          dogProfiles,
          currentPage: 'judgement',
        });
      });
  }

  renderPage() {
    if (this.state.currentPage === 'judgement') {
      return (
        <JudgementPage
          currentDogIndex={this.state.currentDogIndex}
          dogProfiles={this.state.dogProfiles}
          dislike={this.dislike}
          like={this.like}
        />
      );
    } else if (this.state.currentPage === 'add_dog_form') {
      return (
        <PreviewDogForm
          name={this.state.name}
          age={this.state.age}
          breed={this.state.breed}
          src={this.state.src}
          handleChange={this.handleFormChange}
          handleSubmit={this.addDog}
          submitButtonName="Join the Pack!"
        />
      );
    } else if (this.state.currentPage === 'edit_dog_form') {
      return (
        <PreviewDogForm
          name={this.state.name}
          age={this.state.age}
          breed={this.state.breed}
          src={this.state.src}
          handleChange={this.handleFormChange}
          handleSubmit={this.editDog}
          submitButtonName="Edit dog details."
        />
      );
    } else if (this.state.currentPage === 'liked') {
      return (
        <LikePage likedDogProfiles={this.state.likedDogProfiles} />
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar changePage={this.handlePageChange} />
        {this.renderPage()}
        <Footer who="gem rats" years="2019" />
      </div>
    );
  }
}

export default App;
