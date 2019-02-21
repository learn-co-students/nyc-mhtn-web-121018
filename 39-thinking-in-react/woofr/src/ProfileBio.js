import React, { Component } from 'react';

class ProfileBio extends Component {
  render() {
    const { name, age, breed } = this.props;

    return (
      <div className="bio-container">
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
      </div>
    );
  }
}

export default ProfileBio;
