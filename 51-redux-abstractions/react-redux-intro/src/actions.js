import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER } from './types';

// action creators

export function increment() {
  return { type: INCREMENT_COUNTER }
}

export function decrement() {
  return { type: DECREMENT_COUNTER }
}

export function setCounter(counter) {
  return { type: SET_COUNTER, payload: counter }
}

export function setCounterToOneHundred() {
  return { type: SET_COUNTER, payload: 100 }
}
