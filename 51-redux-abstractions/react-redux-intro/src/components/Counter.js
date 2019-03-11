import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  console.log('Counter', props);
  return <p>{props.name}: {props.chicken}</p>
}

function mapStateToProps(state) {
  console.log('mapStateToProps for Counter', state);

  return {
    chicken: state.counter,
  }
}

export default connect(mapStateToProps)(Counter);
