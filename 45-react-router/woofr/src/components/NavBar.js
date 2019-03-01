import React from 'react';

const NavBar = (props) => (
  <div className="nav-container">
    <button onClick={() => props.changePage('judgement')}>Judgement</button>
    <button onClick={() => props.changePage('liked')}>Like Page</button>
    <button onClick={() => props.changePage('add_dog_form')}>Join the Pack!</button>
    <button onClick={() => props.changePage('edit_dog_form')}>Train the Dog</button>
  </div>
);

export default NavBar;
