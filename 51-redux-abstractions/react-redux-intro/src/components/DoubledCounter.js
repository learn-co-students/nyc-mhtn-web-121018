import React from 'react';
import { connect } from 'react-redux';

const DoubledCounter = (props) => {
  console.log('DoubledCounter', props);
  return <p>{props.name}: {props.chicken}</p>
}

function mapStateToProps(state) {
  console.log('mapStateToProps for DoubledCounter', state);

  return {
    chicken: state.counter * 2,
  }
}

export default connect(mapStateToProps)(DoubledCounter);
