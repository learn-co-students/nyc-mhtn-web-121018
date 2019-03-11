import React from 'react';
import { connect } from 'react-redux';

const DoubledOverTen = (props) => {
  console.log('DoubledOverTen', props); //prop called name
  if (props.overTen) {
    return <p>{props.name}: {props.chicken}</p>
  } else {
    return null;
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps for DoubledOverTen', state);

  return {
    chicken: state.counter * 2,
    overTen: state.counter > 10,
  }
}

export default connect(mapStateToProps)(DoubledOverTen);
