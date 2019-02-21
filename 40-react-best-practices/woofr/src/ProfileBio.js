import React, { Component } from 'react';

// class c
// func c

// presentational components vs container components
// sole purpose in life is to show things => presentational
// most presentational components are functional components
//  class components with no important state, but really needs lifecycle methods
// YESSSSS!

// container components
// the ones that contain logic
//    it does contain information => state

// c vs p => don't really overlap


// destructure right out of props in the arrow function definition
// defaulting via destructiring
const ProfileBio = ({ name, age = 10, breed = '' }) => {
  // const { name, age, breed } = props;

  return (
    <div className="bio-container">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Breed: {breed}</p>
    </div>
  );
}

export default ProfileBio;
