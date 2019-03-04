import React, { Component } from 'react';

// figuring out what to abstract
const withLoading = (WrappedComponent, loader) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      }
    }

    componentDidMount() {
      console.log('withLoading componentDidMount');
      // adapter pattern => you can write your .thens in such a way
      // that they all return the same thing
      loader // variable
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }

    render() {
      // when it's not done loading... I want to show a loader
      if (this.state.data === null) {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        return <WrappedComponent {...this.props} initialData={this.state.data} />;
      }
    }
  }
}

export default withLoading;

// import React, { Component } from 'react';
//
// const withLoading = (WrappedComponent) => {
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
//
// export default withLoading;
