import React from 'react';
import {filterPokemon} from '../actions/index';
import { connect } from 'react-redux';

const InputFilter = (props) => {
  const handleFilterChange = e => {
    const { filterPokemon } = props;
    filterPokemon(e.target.value);
  }

  const { bool } = props;
  return(
    <React.StrictMode>
      <input id="searchBar" type="text" style={{display: (bool=== true ? 'none' : 'block' )}} onChange={handleFilterChange} placeholder="What pokemon are you looking for"></input>
    </React.StrictMode>
  )
}

const mapDispatchToProps = dispatch => ({
  filterPokemon: query => dispatch(filterPokemon(query))
})

const mapStateToProps = state => ({
  bool: state.isInHome
})

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter);