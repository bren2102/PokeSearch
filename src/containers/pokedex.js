import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Pokemon from '../components/pokemon';
import { boolHome } from '../actions/index';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { setBoolHome } = props;
    setBoolHome(false);
    this.state = {
      url: 'https://pokeapi.co/api/v2/',
      pokemon: '',
    };
  }

  componentDidMount() {
    const { generation } = this.props;
    const { url } = this.state;
    axios.get(url + generation)
      .then(data => {
        this.setState({
          pokemon: data.data.results,
        });
      });
  }

  render() {
    const { query } = this.props;
    const { pokemon } = this.state;
    const queryToFilter = new RegExp(query, 'g');
    return (
      <React.StrictMode>
        {pokemon ? (
          <div id="container">
            {pokemon.filter(p => p.name.match(queryToFilter)).map(pokemon => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading pokemon</h1>
        )}
      </React.StrictMode>
    );
  }
}

Pokedex.propTypes = {
  setBoolHome: PropTypes.func.isRequired,
  generation: PropTypes.string.isRequired,
  query: PropTypes.string,
};

Pokedex.defaultProps = {
  query: '',
};

const mapStateToProps = state => ({
  query: state.queryFilter,
});

const mapDispatchToProps = dispatch => ({
  setBoolHome: bool => dispatch(boolHome(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
