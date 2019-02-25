import React from 'react';

/*
{
  name: 'Mudblood',
  specialty: 'Mediocre magic',
  greased: false,
  'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  'highest medal achieved': 'bronze'
}
*/
const Card = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.hog.name}</h1>
      <ul>
        <li>Specialty: {props.hog.specialty}</li>
        <li>Greased: {props.hog.greased.toString()}</li>
        <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
        <li>Highest medal achieved: {props.hog['highest medal achieved']}</li>
      </ul>
    </div>
  );
}

export default Card;
