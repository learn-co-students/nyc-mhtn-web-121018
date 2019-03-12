import React from 'react'
import { connect } from "react-redux"
import { selectPlayer } from "../actions/actions"

const Player = ({ player, handleSelectPlayer }) => {
  return (
    <div onClick={() => handleSelectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

function mdp(dispatch){
  return {
    handleSelectPlayer: (player) => {
      // console.log("CALLED", player)
      // dispatch(selectPlayer(player))
      dispatch({type: "SELECT_PLAYER", payload: player})
    }
  }
}


export default connect(null, mdp)(Player)
