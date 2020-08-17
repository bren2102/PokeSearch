export const FILTER_POKEMON = 'FILTER_POKEMON';
export const BOOL_HOME = 'BOOL_HOME';
export const CLEAN_INPUT = 'CLEAN_INPUT';
export const SHOW_DETAILS = 'SHOW_DETAILS';
export const UPDATE_POKEMONES = 'UPDATE_POKEMONES';

export const updatePokemones = update => ({
  type: UPDATE_POKEMONES,
  update,
});

export const filterPokemon = changeQueryFilter => ({
  type: FILTER_POKEMON,
  changeQueryFilter,
});

export const boolHome = bool => ({
  type: BOOL_HOME,
  bool,
});

export const cleanInput = () => ({
  type: CLEAN_INPUT,
});

export const showDetails = (pDetail, update) => ({
  type: SHOW_DETAILS,
  pDetail,
  update,
});
