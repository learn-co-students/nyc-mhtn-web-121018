import React from 'react';
import { connect } from 'react-redux';

const OverTen = (props) => {
  console.log('OverTen', props);
  if (props.overTen) {
    return <p>{props.name}: {props.chicken}</p>
  } else {
    return null;
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps for OverTen', state);

  return {
    chicken: state.counter,
    overTen: state.counter > 10,
  }
}

export default connect(mapStateToProps)(OverTen);
