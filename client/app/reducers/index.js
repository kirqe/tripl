import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { offers } from './offers';

const rootReducer = combineReducers({
  offers,
  routing: routerReducer
});

export default rootReducer;
