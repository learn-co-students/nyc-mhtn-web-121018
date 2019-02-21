import React, { Component, Fragment } from 'react';
import Card from './Card';

// a list of cards?
class LikePage extends Component {
  render() {
    console.log(this.props);
    return this.props.likedDogs.map(dog => {
      return <Card profile={dog} />
    });
  }
}

export default LikePage;
