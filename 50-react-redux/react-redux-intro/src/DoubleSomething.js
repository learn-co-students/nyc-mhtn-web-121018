import React from 'react';
import { connect } from 'react-redux';

const DoubleSomething = (props) => {
  console.log('DoubleSomething', props); //prop called name
  if (props.overTen) {
    return <p>{props.chicken}</p>
  } else {
    return null;
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps for DoubleSomething', state);
  // you can do anything in here that you want

  return {
    chicken: state.counter * 2,
    name: state.counter, // it will overwrite
    overTen: state.counter > 10,
  }
}

export default connect(mapStateToProps)(DoubleSomething);
