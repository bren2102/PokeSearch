import { FILTER_POKEMON, CLEAN_INPUT } from '../actions/index';

const queryReducer = (state=[], action) => {
  switch(action.type){
    case FILTER_POKEMON: {
      return action.changeQueryFilter
    }
    case CLEAN_INPUT: {
      return '';
    }
    default: return state;
  };
}

export default queryReducer;