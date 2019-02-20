import React, { Component } from 'react';

// { } inside of JSX => expressions
// a javascript code snippet
// something that evaluates
// statement that returns something
// has to be a one liner => you cannot do things like:
// if == no good, ternary == ok
// for == no good
// if you want to use some sort of block, put it in a function and invoke it
class ProfilePictures extends Component {
  render() {
    console.log('ProfilePictures', this.props)
    return <img src={this.props.picture} />;
  }
}

export default ProfilePictures;
