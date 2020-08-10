import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Pokemon from '../components/pokemon';

class Pokedex extends React.Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
    generation: null,
    id:null,
    pokemon: null
  }

  async componentDidMount() {
    const result = await axios.get(this.state.url);
    this.setState({ pokemon:result.data['results'] });
  }

  render(){
    return(
      <React.StrictMode>
        {this.state.pokemon?(
          <div id="container">
            {this.state.pokemon.map(pokemon => (
              <Pokemon 
                name={pokemon.name}
                index={pokemon.name}
                url={pokemon.url} />
            ))}
          </div>
          ):(
          <h1>Loading pokemon</h1>
          )}
      </React.StrictMode>
    );
  }
};

export default Pokedex;