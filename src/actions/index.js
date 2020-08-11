export const FILTER_POKEMON = 'FILTER_POKEMON';
export const BOOL_HOME = 'BOOL_HOME';

export const filterPokemon = (changeQueryFilter) => ({
  type: FILTER_POKEMON,
  changeQueryFilter
});

export const boolHome = (bool) => ({
  type: BOOL_HOME,
  bool
})