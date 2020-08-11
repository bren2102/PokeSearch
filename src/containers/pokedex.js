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
    axios.get(this.state.url + generation)
    .then((data) => {
        this.setState({
        pokemon: data.data['results'],
        generation
      });
    });
  }

  render(){
    const {query} = this.props;
    const queryToFilter = new RegExp(query, 'g');
    return(
      <React.StrictMode>
        {this.state.pokemon?(
          <div id="container">
            {this.state.pokemon.filter( p => p.name.match(queryToFilter)).map(pokemon => (
              <Pokemon 
                name={pokemon.name}
                key={pokemon.name}
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

const mapStateToProps = state => ({
  query: state.queryFilter,
});

export default connect(mapStateToProps)(Pokedex);