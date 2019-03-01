import React, { Fragment } from 'react';
import Card from './Card';
import DogForm from './DogForm';

const PreviewDogForm = (props) => {
  const { name, age, breed, src, handleChange, handleSubmit, submitButtonName } = props;
  const profile = { name, age, breed, src };

  return (
    <Fragment>
      <DogForm
        {...profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitButtonName={submitButtonName}
      />
      <Card profile={profile} />
    </Fragment>
  );
}

export default PreviewDogForm;
