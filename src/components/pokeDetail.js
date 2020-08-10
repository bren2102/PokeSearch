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
        this.setState({
        name: data.data.name,
        id: data.data.order
      });
    });
    
  }

  render(){
    return(
      <div id="pokemon-details">
        <div id="top-name">
          <p>{this.state.id}</p>
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