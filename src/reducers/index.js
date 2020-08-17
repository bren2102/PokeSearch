import { combineReducers } from 'redux';
import queryReducer from './queryFilter';
import boolean from './booleanHome';
import details from './showDetails';
import pokemonReducer from './pokemones';

const rootReducer = combineReducers({
  queryFilter: queryReducer,
  isInHome: boolean,
  details,
  pokemones: pokemonReducer,
});

export default rootReducer;
