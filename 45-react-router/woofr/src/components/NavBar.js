import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <div className="nav-container">
    {/*
    <button onClick={() => props.changePage('judgement')}>Judgement</button>
    <button onClick={() => props.changePage('liked')}>Like Page</button>
    <button onClick={() => props.changePage('add_dog_form')}>Join the Pack!</button>
    <button onClick={() => props.changePage('edit_dog_form')}>Train the Dog</button>
    <a href="/judgement">Judgement with a tag</a>
    */}
    <NavLink to="/judgement" activeClassName="active">Judgement</NavLink>
    <NavLink to="/match" activeClassName="active">Like Page</NavLink>
    <NavLink to="/join" activeClassName="active">Join the Pack!</NavLink>
    <NavLink to="/edit" activeClassName="active">Train the Dog</NavLink>
  </div>
);

export default NavBar;
