import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';

const Card = (props) => {
  const { src, name, age, breed } = props.profile;

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

export default Card;
