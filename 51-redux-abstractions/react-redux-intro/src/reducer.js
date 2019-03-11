import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER } from './types';

// router + controller + model
export default function reducer(state = { counter: 0 }, action) {
  console.log('%c REDUCER!', 'color: blue', state, action);

  switch(action.type) {
    case INCREMENT_COUNTER:
      return {...state, counter: state.counter + 1}
    case DECREMENT_COUNTER:
      return {...state, counter: state.counter - 1}
    case SET_COUNTER:
      return {...state, counter: action.payload}
    default:
      console.log('i hit the default');
      return state;
  }
}
