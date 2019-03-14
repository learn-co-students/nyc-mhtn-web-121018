import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from './apis/AnimalAdapter';

export function addUserAction(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimalAction(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

// any ideas? but you are stuccc=kkk
// 1st benefit of thunk, full abstraction to action creators
// 2nd beneif is that you can dispatch, a lot
export function fetchAnimalAction() {
  return (dispatch) => {
    console.log("I'm a thunktion.", dispatch);
    dispatch({ type: "FETCHING_A_PICTURE" })
    AnimalAdapter.getDog()
      .then(url => {
        dispatch(updateAnimalAction(url))
        dispatch({ type: "FETCHED_PICTURE" })
        // this.props.updateAnimal(url);
      })
  }

    // return {
    //   type: UPDATE_ANIMAL,
    //   payload: url,
    // }
}
