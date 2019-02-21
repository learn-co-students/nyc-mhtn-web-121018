import React, { Component } from 'react';

// class Header extends Component {
//   join = () => {
//     this.props.changePage('add_dog_form');
//   }
//
//   render() {
//     return (
//       <div className="header-container">
//         <h1>Woofr</h1>
//         <button onClick={this.join}>Join</button>
//         <button onClick={() => { this.props.changePage('judgement') }}>Judgement</button>
//         <button onClick={() => { this.props.changePage('edit_dog_form') }}>Edit</button>
//         <button onClick={() => { this.props.changePage('liked') }}>Like Page</button>
//       </div>
//     );
//   }
// }

const Header = (props) => {
  const join = () => {
    props.changePage('add_dog_form');
  }

  return (
    <div className="header-container">
      <h1>Woofr</h1>
      <button onClick={join}>Join</button>
      <button onClick={() => { props.changePage('judgement') }}>Judgement</button>
      <button onClick={() => { props.changePage('edit_dog_form') }}>Edit</button>
      <button onClick={() => { props.changePage('liked') }}>Like Page</button>
    </div>
  );
}

export default Header;
