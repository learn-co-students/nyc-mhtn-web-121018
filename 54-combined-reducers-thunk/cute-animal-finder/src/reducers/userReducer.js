import { ADD_USER } from '../types';

const userState = {
  users: [],
  // really really big
};

export default function userReducer(state = userState, action) {
  console.log('userReducer', state, action);
  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    // slowly starting to have to switch between looking at
    // animal features
    // user features
    // case EDIT_USER:
    //
    // case DELETE_USER:

    // case FRIEND_USER:

    // you wanted to have one action to rule them all
    // DELETEING A TON OF STUFF
    case "RESET":
      return userState;

    default:
      return state;
  }
}
