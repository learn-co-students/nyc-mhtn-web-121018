import React from 'react';

class Clock extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // the logic to not update the other 9 times?
    console.log(this.props, nextProps);
    return true;
  }

  render() {
    const { milliseconds, accuracy = 2 } = this.props;

    // console.log(milliseconds);
    return (
      <h1>{(milliseconds / 1000).toFixed(accuracy)}</h1>
    )
  }
}

export default Clock;
