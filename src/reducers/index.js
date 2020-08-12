import { combineReducers } from 'redux';
import queryReducer from './queryFilter';
import boolean from './booleanHome';

const rootReducer = combineReducers({
  queryFilter: queryReducer,
  isInHome: boolean,
});

export default rootReducer;
