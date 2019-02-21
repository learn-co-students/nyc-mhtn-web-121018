import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';

// state
// Component Lifecycle <== hooks

// class component
// class Card extends Component {
//   render() {
//     const { src, name, age, breed } = this.props.profile;
//
//     return (
//       <div className="card-container">
//         <ProfilePicture picture={src}/>
//         <ProfileBio
//           name={name}
//           age={age}
//           breed={breed}
//         />
//       </div>
//     );
//   }
// }

// functional component
// function Card(props) {
//   const { src, name, age, breed } = props.profile;
//
//   return (
//     <div className="card-container">
//       <ProfilePicture picture={src}/>
//       <ProfileBio
//         name={name}
//         age={age}
//         breed={breed}
//       />
//     </div>
//   );
// }

const Card = (props) => {
  const { src, name, age, breed } = props.profile;

  return (
    <div className="card-container">
      <ProfilePicture picture={src}/>
      <ProfileBio
        name={name}
        age={age}
        breed={breed}
      />
    </div>
  );
}

// what is the effective difference b/w func vs class?
//  state, lifecycle method => class
// if you don't need those two things
// the difference is:
// 1. looks cleaner
// 2. supposed to be faster => maybe by now...

export default Card;
