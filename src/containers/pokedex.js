import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Pokemon from '../components/pokemon';

class Pokedex extends React.Component {
  state = {
    url: 'https://pokeapi.co/api/v2/generation/1',
    generation: null,
    pokemon: null
  }

  async componentDidMount() {
    const result = await axios.get(this.state.url);
    this.setState({ pokemon:result.data['pokemon_species'] });
  }

  render(){
    return(
      <div>
        {this.state.pokemon?
          (<div>
            {this.state.pokemon.map(pokemon => (
              <Pokemon 
                name={pokemon.name} />
            ))}
          </div>):
          (<h1>Loading pokemon</h1>)}
      </div>
    );
  }
};

export default Pokedex;