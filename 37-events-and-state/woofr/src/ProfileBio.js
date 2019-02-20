import React, { Component } from 'react';

class ProfileBio extends Component {
  render() {
    const { name, age, breed } = this.props;
    console.log(this.props);
    return (
      <div
        onClick={function() { console.log("clicked") }}
        onMouseOver={() => { console.log('hjover') }}
        className="bio-container"
      >
        <h2>{name}</h2>
        <p>age: {age}</p>
        <p>breed: {breed}</p>
      </div>
    );
  }
}

export default ProfileBio;
