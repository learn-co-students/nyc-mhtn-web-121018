import React from 'react';

const Clock = ({ milliseconds, accuracy = 2 }) => {
  return (
    <h1>{(milliseconds / 1000).toFixed(accuracy)}</h1>
  )
}

export default Clock;
