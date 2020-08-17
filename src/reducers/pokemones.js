import { UPDATE_POKEMONES } from '../actions/index';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_POKEMONES: {
      return action.update;
    }
    default:
      return state;
  }
};
export default pokemonReducer;
