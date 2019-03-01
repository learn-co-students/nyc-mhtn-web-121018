import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  const { id, src, name, age, breed } = props.profile;

  return (
    <div className="card-container">
      <NavLink to={`/match/${id}`} activeClassName="active">Dog</NavLink>
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
