import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class PokeDetails extends React.Component {
  state = {
    index: '',
    name: '',
    imageUrl: '',
  };

  componentDidMount() {
    const { name } = this.props.match.params;
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios.get(pokemonUrl)
    .then((data) => {
      console.log((data.data.id).toString.length)
        this.setState({
        name: data.data.name,
        index: ((data.data.id).toString.length === 3) ? data.data.id : (('0').repeat(3 - (data.data.id).toString.length) + data.data.id)
      });
    });
    
  }

  render(){
    return(
      <div id="pokemon-details">
        <div id="top-name">
          <p>{this.state.index}</p>
          <p>
            {this.state.name
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
          </p>   
        </div>
      </div>
    );
  }

}

export default withRouter(PokeDetails);