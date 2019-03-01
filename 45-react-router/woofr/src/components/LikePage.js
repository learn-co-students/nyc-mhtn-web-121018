import React from 'react';
import Card from './Card';

const LikePage = (props) => {
  console.log("I am LikePage", props);
  console.log(props.match.params.id);
  const { likedDogProfiles = [] } = props;

  return (
    <div className="like-container">
      <button onClick={() => props.history.goBack()}>Go Back</button>
      <button onClick={() => props.history.push('/judgement')}>Judge me</button>
      {likedDogProfiles.map(dog => <Card key={dog.id} profile={dog} />)}
    </div>
  );
}

export default LikePage;

// my preferred way is based off mobile
// plan out all your screens => this is mostly a coneptual matchup to a mock
// then plan out components
