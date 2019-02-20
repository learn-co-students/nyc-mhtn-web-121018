import React, { Component } from 'react';

class ProfilePicture extends Component {
  render() {
    const { picture } = this.props;
    return <img src={picture} />;
  }
}

export default ProfilePicture;
