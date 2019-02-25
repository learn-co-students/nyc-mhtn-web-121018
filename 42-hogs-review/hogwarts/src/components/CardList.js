import React from 'react';
import Card from './Card';
// import uuid from 'uuid';

// Ok, what do I want to do here?
// I want to render the cards... so I need cards.
const CardList = (props) => {
  console.log(props);
  // [{}, {}, {}] => [<>, <>, <>]
  // the key must be a unique identifier of that thing you are rendering
  return props.hogList.map(hog => <Card key={hog.id} hog={hog}/>);


  // (
  //   <Card
  //     hog={
  //       {
  //         name: 'Mudblood',
  //         specialty: 'Mediocre magic',
  //         greased: false,
  //         'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  //         'highest medal achieved': 'bronze'
  //       }
  //     }
  //     name="Mudblood"
  //     specialty="Mediocre magic"
  //     greased="false"
  //     ratio={2.0}
  //     medal="bronze"
  //   />
  // );
}

export default CardList;
