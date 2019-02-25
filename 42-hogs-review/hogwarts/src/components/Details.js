import React from 'react';

const Details = (props) => (
  <ul>
    <li>Specialty: {props.specialty}</li>
    <li>Greased: {props.greased.toString()}</li>
    <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {props.ratio}</li>
    <li>Highest medal achieved: {props.medal}</li>
  </ul>
);

export default Details;
