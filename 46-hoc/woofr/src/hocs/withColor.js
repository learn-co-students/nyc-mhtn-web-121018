// this gives colors to things => components
import React, { Component } from 'react';

// this is useless, purely academic
// const withColor = (WrappedComponent) => {
//   return WrappedComponent;
// }

// the simplest HOC you can write... does nothing
const withColor = (WrappedComponent) => {
  // return function() {} // anonymous function returned
  return class extends Component { // anonymous class returned
    constructor(props) {
      super(props);

      console.log('withColor', this.props);
    }

    randomColor() {
      const colors = ['red', 'blue', 'green', 'orange', 'magenta', 'fuchsia']
      return colors[Math.floor(Math.random()*colors.length)] // whoa...
    }

    render() {
      return <WrappedComponent {...this.props} color={this.randomColor()} />;
    }
  }
  // return a new component with new functionality;
  // copy it?
  // keyword new Component
  // import the original, then do something to it
}


export default withColor;

// const withColor = (WrappedComponent) => {
//   return class extends Component {
//     constructor(props) {
//       super(props);
//     }
//
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }
// }
