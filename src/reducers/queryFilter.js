import { FILTER_POKEMON } from '../actions/index';

const queryReducer = (state=[], action) => {
  switch(action.type){
    case FILTER_POKEMON: {
      return action.changeQueryFilter
    }
    default: return state;
  };
}

export default queryReducer;