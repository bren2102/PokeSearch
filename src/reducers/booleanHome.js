import { BOOL_HOME } from '../actions/index';

const boolean = (state=[], action) => {
  switch(action.type){
    case BOOL_HOME: {
      return action.bool;
    }
    default: return state;
  };
}

export default boolean;