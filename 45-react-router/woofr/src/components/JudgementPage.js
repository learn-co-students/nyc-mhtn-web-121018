import React from 'react';
import Card from './Card';
import SwipeButton from './SwipeButton';

const JudgementPage = (props) => {
  const { currentDogIndex, dogProfiles, dislike, like } = props;

  const renderCard = () => {
    if (currentDogIndex < dogProfiles.length) {
      return <Card profile={dogProfiles[currentDogIndex]} />
    } else {
      return <h2>No dogs left in the dog park.</h2>
    }
  }

  return (
    <React.Fragment>
      {renderCard()}
      <SwipeButton onClick={dislike}>Growl</SwipeButton> {/* Dislike */}
      <SwipeButton onClick={like}>Woof</SwipeButton> {/* Like */}
    </React.Fragment>
  );
}

export default JudgementPage;
