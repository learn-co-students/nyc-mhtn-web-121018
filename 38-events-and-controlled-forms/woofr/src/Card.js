import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';

class Card extends Component {
  render() {
    const { src, name, age, breed } = this.props.profile;

    return (
      <div className="card-container">
        <ProfilePicture picture={src}/>
        <ProfileBio
          name={name}
          age={age}
          breed={breed}
        />
      </div>
    );
  }
}

export default Card;
