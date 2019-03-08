import React from 'react';
import { connect } from 'react-redux';

const Something = (props) => {
  console.log('Something', props); //prop called name
  return <p>{props.chicken}</p>
}

function mapStateToProps(state) {
  console.log('mapStateToProps for Something', state);
  // you can do anything in here that you want
  
  return {
    chicken: state.counter,
    name: state.counter, // it will overwrite
  }
}

export default connect(mapStateToProps)(Something);
