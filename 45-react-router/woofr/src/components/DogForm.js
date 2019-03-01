import React from 'react';

const DogForm = (props) => {
  const { name, age, breed, src, handleChange, handleSubmit, submitButtonName } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" name="name" value={name} onChange={handleChange}/></label>
      <label>Age: <input type="number" name="age" value={age} onChange={handleChange}/></label>
      <label>Breed: <input type="text" name="breed" value={breed} onChange={handleChange}/></label>
      <label>Selfie: <input type="text" name="src" value={src} onChange={handleChange}/></label>

      <input type="submit" value={submitButtonName} />
    </form>
  );
}

export default DogForm;
