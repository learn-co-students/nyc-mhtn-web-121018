import React, { Component } from 'react';

class ProfilePicture extends Component {
  render() {
    const { picture } = this.props;
    return <img className="profile-pic" src={picture} />;
  }
}

export default ProfilePicture;
