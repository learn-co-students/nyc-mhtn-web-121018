import { UPDATE_ANIMAL } from '../types';

const animalState = {
  animalSrc: null,
  isLoading: true,
  // really really big
};


export default function animalReducer(state = animalState, action) {
  console.log('animalReducer', state, action);
  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    case "FETCHING_A_PICTURE":
      return { ...state, isLoading: true }
    case "FETCHED_PICTURE":
      return { ...state, isLoading: false }  
    // slowly starting to have to switch between looking at
    // animal features
    // user features
    // case LIKE_ANIMAL:
    //
    // case DISLIKE_ANIMAL:
    //
    // case CHANGE_ANIMAL:
    //
    // case CHANGE_PICTURE:
    case "RESET":
      return animalState;

    default:
      return state;
  }
}
