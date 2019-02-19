// functional component
// function Header() {
//   return (
//     <div className="header-container" id="a">
//       <h1 align="right">Woofr</h1>
//     </div>
//   );
// }

import React, { Component } from 'react';

// React.createElement
class Header extends Component {
  render() {
    return (
      <div className="header-container" id="a">
        <h1 align="right">Woofr</h1>
      </div>
    );
  }
}

export default Header;

// import export in JS
