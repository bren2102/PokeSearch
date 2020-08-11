export const FILTER_POKEMON = 'FILTER_POKEMON';

export const filterPokemon = (changeQueryFilter) => ({
  type: FILTER_POKEMON,
  changeQueryFilter
})