// going to track clicks... then show adds after X number of clicks

import React, { Component } from 'react';
import Ad from '../components/Ad';

const withAd = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        clicks: 0,
      }
    }

    handleClickCapture = (event) => {
      this.setState((prevState) => { return { clicks: prevState.clicks + 1 } });
    }

    resetAd = () => {
      this.setState({ clicks: 0 })
    }

    // maybe on every even
    // there has to be a way to reset clicks
    render() {
      console.log('withAd', this.state.clicks);

      if (this.state.clicks === 2) {
        return <Ad toggleAd={this.resetAd} />
      } else {
        // you can also track mouse movements...
        return (
          <div onClickCapture={this.handleClickCapture}>
            <WrappedComponent {...this.props} />
          </div>
        )
      }
    }
  }
}

export default withAd;
