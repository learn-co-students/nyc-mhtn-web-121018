import gamesData from '../gamesData'

const defaultState = {
  teams: gamesData.teams, 
  selectedPlayer: null, 
  otherThing: "beef"
}

function reducer(state=defaultState, action){
  // the purpose of a reducer is to replace state
  console.log(action)

  switch(action.type){
    case "SELECT_PLAYER":
      return {...state, selectedPlayer: action.payload}
    default:
      return state
  }


}

export default reducer