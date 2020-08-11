import queryReducer from './queryFilter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  queryFilter: queryReducer,
})

export default rootReducer;