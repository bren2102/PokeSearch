import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { boolHome, cleanInput } from '../actions/index';

class PokeDetails extends React.Component {
  constructor(props){
    super(props);
    const { setBool, clearInput } = props;
    setBool(true);
    clearInput();
  }
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

const mapDispatchToProps = dispatch => ({
  setBool: bool => dispatch(boolHome(bool)),
  clearInput: () => dispatch(cleanInput())
});

export default connect(null, mapDispatchToProps)(withRouter(PokeDetails));