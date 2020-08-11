import React from 'react';
import {filterPokemon} from '../actions/index';
import { connect } from 'react-redux';

const InputFilter = (props) => {
  const handleFilterChange = e => {
    const { filterPokemon } = props;
    filterPokemon(e.target.value);
  }

  return(
    <React.StrictMode>
      <input id="searchBar" type="text" onChange={handleFilterChange} placeholder="What pokemon are you looking for"></input>
    </React.StrictMode>
  )
}

const mapDispatchToProps = dispatch => ({
  filterPokemon: query => dispatch(filterPokemon(query))
})

export default connect(null, mapDispatchToProps)(InputFilter);