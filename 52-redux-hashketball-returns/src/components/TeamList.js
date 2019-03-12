import React from 'react'
import Team from './Team'
import { connect } from "react-redux"

const TeamList = ({ teams, selectPlayer }) => {

  const renderedTeams = teams.map(team => {
    return <Team key={team.id} team={team}/>
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

function msp(state){
  // this is how we read from state and make values from state available to this component
  return {
    teams: state.teams,
  }

  // return state
}

export default connect(msp)(TeamList)
