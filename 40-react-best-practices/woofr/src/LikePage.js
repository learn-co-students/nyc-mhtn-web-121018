import React, { Component } from 'react';
import Card from './Card';

class LikePage extends Component {
  render() {
    console.log(this.props);
    return this.props.likedDogs.map(dog => {
      return <Card profile={dog} />
    });
  }
}

export default LikePage;
