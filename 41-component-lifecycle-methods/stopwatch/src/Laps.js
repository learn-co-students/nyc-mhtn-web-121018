import React from 'react';

const Laps = ({ laps, accuracy = 2 }) => {
  return (
    <ol>
      {laps.map(lap => <li key={lap.id}>{(lap.time / 1000).toFixed(accuracy)}</li>)}
    </ol>
  )
}

export default Laps;
