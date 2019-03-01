import React from 'react';
import Card from './Card';

const LikePage = (props) => {
  const { likedDogProfiles = [] } = props;

  return (
    <div className="like-container">
      {likedDogProfiles.map(dog => <Card key={dog.id} profile={dog} />)}
    </div>
  );
}

export default LikePage;
