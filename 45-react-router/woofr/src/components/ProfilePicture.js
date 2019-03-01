import React from 'react';
import missingDog from '../assets/svg/logo.svg';

const ProfilePicture = (props) => {
  let { picture } = props;

  // imagine actual programmatic logic here...
  const imageExists = (imageUrl) => {
    return imageUrl.length < 8;
  }

  picture = imageExists(picture) ? missingDog : picture;

  return <img className="profile-pic" src={picture} alt="dog selfie" />;
}

export default ProfilePicture;
