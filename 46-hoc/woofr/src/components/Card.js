import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';
import { NavLink } from 'react-router-dom';
import withColor from '../hocs/withColor';
import withAd from '../hocs/withAd';
import { withRouter } from 'react-router-dom';

// maybe extends? => inheritance XXXXXX

const Card = (props) => {
  console.log('Card props', props);

  const { id, src, name, age, breed } = props.profile;
  const { color = 'white' } = props;

  return (
    <div className="card-container" style={{ backgroundColor: color }}>
      <NavLink to={`/match/${id}`} activeClassName="active">Dog</NavLink>
      <ProfilePicture picture={src}/>
      <ProfileBio
        name={name}
        age={age}
        breed={breed}
      />
    </div>
  );
}

// the pattern used in the file that would import Card
// const NewCard = withColor(Card);
//
// export default NewCard;

// this is the pattern where you want to use the HOC for all Cards
export default withAd(withRouter(withColor(Card))); // we al;so want router props!
