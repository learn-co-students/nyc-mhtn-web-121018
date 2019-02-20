import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';

class Card extends Component {
  render() {
    // destructring in JS => you will see this
    const { src, name, age, breed } = this.props.profile;
    // const { profile: { src, name, age, breed } } = this.props;
    // const { props: { profile: { src, name, age, breed } } } = this;
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
