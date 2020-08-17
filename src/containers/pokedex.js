import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Pokemon from '../components/pokemon';
import { boolHome, updatePokemones } from '../actions/index';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { setBoolHome } = props;
    setBoolHome(false);
  }

  componentDidMount() {
    const { generation, updatePokemon } = this.props;
    const url = 'https://pokeapi.co/api/v2/';
    axios.get(url + generation)
      .then(data => {
        updatePokemon(data.data.results);
      });
  }

  render() {
    const { query, pokemones } = this.props;
    const queryToFilter = new RegExp(query, 'g');
    return (
      <React.StrictMode>
        {(pokemones !== pokemones.length) ? (
          <div id="container">
            {pokemones.filter(p => p.name.match(queryToFilter)).map(pokemon => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h2>Loading pokemon</h2>
        )}
      </React.StrictMode>
    );
  }
}

Pokedex.propTypes = {
  setBoolHome: PropTypes.func.isRequired,
  generation: PropTypes.string.isRequired,
  query: PropTypes.string,
  updatePokemon: PropTypes.func.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

Pokedex.defaultProps = {
  query: '',
};

const mapStateToProps = state => ({
  query: state.queryFilter,
  pokemones: state.pokemones,
});

const mapDispatchToProps = dispatch => ({
  setBoolHome: bool => dispatch(boolHome(bool)),
  updatePokemon: update => dispatch(updatePokemones(update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
