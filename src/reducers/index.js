import queryReducer from './queryFilter';
import boolean from './booleanHome';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  queryFilter: queryReducer,
  isInHome: boolean
})

export default rootReducer;