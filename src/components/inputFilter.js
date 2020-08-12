import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPokemon } from '../actions/index';

const InputFilter = props => {
  const handleFilterChange = e => {
    const { filterPokemon } = props;
    filterPokemon(e.target.value);
  };

  const { bool, queryFilter } = props;

  return (
    <React.StrictMode>
      <input id="searchBar" type="text" style={{ display: (bool === true ? 'none' : 'block') }} value={queryFilter} onChange={handleFilterChange} placeholder="What pokemon are you looking for" />
    </React.StrictMode>
  );
};

InputFilter.propTypes = {
  filterPokemon: PropTypes.func.isRequired,
  bool: PropTypes.bool,
  queryFilter: PropTypes.string,
};

InputFilter.defaultProps = {
  bool: true,
  queryFilter: '',
};

const mapDispatchToProps = dispatch => ({
  filterPokemon: query => dispatch(filterPokemon(query)),
});

const mapStateToProps = state => ({
  bool: state.isInHome,
  queryFilter: state.queryFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter);
