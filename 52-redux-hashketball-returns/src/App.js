import React, { Component } from 'react';
import './App.css';
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavHeader />
        <TeamList/> 
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}

function msp(state){
  // this is how we read from state and make values from state available to this component
  return {
    selectedPlayer: state.selectedPlayer
  }

  // return state
}

export default connect(msp)(App);
