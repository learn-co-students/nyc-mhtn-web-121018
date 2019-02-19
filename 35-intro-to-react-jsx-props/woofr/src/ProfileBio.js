import React, { Component } from 'react';

const data = {
  src: "https://images.dog.ceo/breeds/pyrenees/n02111500_1170.jpg",
  name: "Fluffy",
  age: 3,
  breed: "pyrenees"
};

// props are just how you access the arguments you pass into the compoent
class ProfileBio extends Component {
  render() {
    console.log('ProfileBio', this.props)
    return <div className="bio-container">
      <h2>{this.props.name}</h2>
      <p>age: {this.props.age + 1000}</p>
      <p>breed: {this.props.breed.toUpperCase()}</p>
    </div>;
  }
}

export default ProfileBio;
