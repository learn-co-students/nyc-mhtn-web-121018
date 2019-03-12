import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from "react-redux"
import { selectPlayer } from "../actions/actions"


const NavHeader = (props) => {
  return (
    <Header className='header' as='h5' block>
      <h3> Hashketball: The Dribbling </h3>

      <img className='App-logo' onClick={props.clearPlayer} alt="Hashketball" src='https://images.vexels.com/media/users/3/135385/isolated/lists/212a5985af3fc8329ada7bc2a45bad82-basketball-circle-icon.png'></img>
    </Header>
  )
}

function mdp(dispatch){
  return {
    clearPlayer: () => {
      // console.log("CALLED", player)
      dispatch(selectPlayer(null))
    }
  }
}


export default connect(null, mdp)(NavHeader)
