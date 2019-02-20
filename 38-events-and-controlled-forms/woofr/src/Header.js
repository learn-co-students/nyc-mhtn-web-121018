import React, { Component } from 'react';

// this class has its own state, cannot change state of another component in here through setState
class Header extends Component {
  // not rebind, remake the arrow every time
  join = () => {
    this.props.changePage('add_dog_form');
  }

  render() {
    console.log('Header', this.state);
    return (
      <div className="header-container">
        <h1>Woofr</h1>
        <button onClick={this.join}>Join</button>
        <button onClick={() => { this.props.changePage('judgement') }}>Judgement</button>
      </div>
    );
  }
}

export default Header;
