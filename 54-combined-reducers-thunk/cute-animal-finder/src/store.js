import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import animalReducer from './reducers/animalReducer';

const rootReducer = combineReducers(
  {
    user: userReducer,
    animal: animalReducer
  }
);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
