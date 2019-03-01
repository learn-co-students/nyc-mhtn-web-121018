import React from 'react';

const ProfileBio = ({ name = '', age = 0, breed = '' }) => (
  <div className="bio-container">
    <h2>Name: {name}</h2>
    <p>Age: {age}</p>
    <p>Breed: {breed}</p>
  </div>
);

export default ProfileBio;
