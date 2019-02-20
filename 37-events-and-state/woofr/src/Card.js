import React, { Component } from 'react';
import ProfilePictures from './ProfilePictures';
import ProfileBio from './ProfileBio';

const data = {
  src: "https://images.dog.ceo/breeds/pyrenees/n02111500_1170.jpg",
  name: "Fluffy",
  age: 3,
  breed: "pyrenees"
};

// props => properties of a component
// props are the arguments to your component

// one rule of thumb for prop naming => make it make sense within the context of that component, not the parent
// why does it get annoying if you pass down an entire object?
// - object can have data you don't need
// - paths change, naming changes, tied to the naming within the object
class Card extends Component {
  render() {
    console.log('Card', this.props)
    return (
      <div className="card-container">
        <ProfilePictures picture={this.props.profile.src}/>
        <ProfileBio somethingelse="asdfasdfasdfasdf" name={this.props.profile.name} age={this.props.profile.age} breed={this.props.profile.breed} />
      </div>
    );
  }
}

export default Card;
