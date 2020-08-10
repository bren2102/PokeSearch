import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Pokemon from '../components/pokemon';

class Pokedex extends React.Component {
  state = {
    url: 'https://pokeapi.co/api/v2/',
    generation: null,
    id:null,
    pokemon: null
  }

  componentDidMount() {
    const { generation } = this.props;
    console.log(generation)
    axios.get(this.state.url + generation)
    .then((data) => {
        this.setState({
        pokemon: data.data['results'],
        generation
      });
    });
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

export default withRouter(Pokedex);