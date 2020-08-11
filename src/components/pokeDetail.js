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
    type:[],
    entriesText:[],
    eggGroups:[],
    color:[],
    height:'',
    weight:'',
    abilities:[],
    captureRate:'',
    baseHappiness:'',
    baseExperience:'',
    growthRate:[],
    genderRate: ''
  };

  componentDidMount() {
    const { name } = this.props.match.params;
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    axios.get(pokemonUrl)
      .then((data) => {
        console.log(data.data['abilities'].map(abilitie => abilitie.ability.name))
        this.setState({
        name: data.data.name,
        index: ((data.data.id).toString().length === 3) ? data.data.id : (('0').repeat(3 - (data.data.id).toString().length) + data.data.id),
        type: data.data['types'],
        height: (data.data.height) / 10,
        weight: (data.data.weight) / 10,
        abilities: data.data['abilities'],
        baseExperience: data.data.base_experience
      });
    });
    
    axios.get(pokemonSpecies)
    .then((data)=>{
      this.setState({
        entriesText: data.data['flavor_text_entries'].filter(language => language.language.name.match('en')).map(text => text.flavor_text),
        eggGroups: data.data['egg_groups'],
        color: data.data['color'].name,
        captureRate: data.data.capture_rate,
        baseHappiness: data.data.base_happiness,
        growthRate:data.data['growth_rate'].name,
        genderRate: data.data.gender_rate
      });
    });
  };

  render(){
    
    const long = this.state.entriesText.length;
    const color = this.state.color
    let pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.index}.png`
    return(
      <div id="pokemon-details" >
        <div id="top-name" style={{ backgroundColor: color }}>
          <h2>#{this.state.index}</h2>
        </div> 
        <div id='details-content'>
          <div id="left-side">
            <img src = {pokemonImg} alt=''></img>
            <h3>
              {this.state.name
              .toLowerCase()
              .split(' ')
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
            </h3>
            <p>"{this.state.entriesText[Math.floor(Math.random() * long)]}"</p>
          </div>
          <div id="right-side">
            <div className="pokedex-section">
              <h4 style={{ color: color }}>Pokedex Data</h4>
              <div className="groups">
                <h4>Height: </h4>
                <div className="map-groups">
                  <p>{this.state.height} m</p>
                </div>
              </div>
              <div className="groups">
                <h4>Weight: </h4>
                <div className="map-groups">
                  <p>{this.state.weight} kg</p>
                </div>
              </div>
              <div className="groups">
                <h4>Types: </h4>
                <div className="map-groups">
                  {this.state.type.map(type =>
                    <p>{type.type.name}</p>
                  )}
                </div>
              </div>
              <div class="groups">
                <h4>Abilities: </h4>
                <div className="map-groups">
                  {this.state.abilities.map(group =>
                    <p>{group.ability.name}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: color }}>Training</h4>
              <div className="groups">
                <h4>Capture rate: </h4>
                <div className="map-groups">
                  <p>{this.state.captureRate}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Base Friendship: </h4>
                <div className="map-groups">
                  <p>{this.state.baseHappiness}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Base Experience: </h4>
                <div className="map-groups">
                  <p>{this.state.baseExperience}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Growth Rate: </h4>
                <div className="map-groups">
                  <p>{this.state.growthRate}</p>
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: color }}>Breeding</h4>
              <div class="groups">
                <h4>Egg Groups: </h4>
                <div className="map-groups">
                  {this.state.eggGroups.map(group =>
                    <p>{group.name}</p>
                  )}
                </div>
              </div>
              <div class="groups">
                <h4>Gender Rate: </h4>
                <div className="map-groups">
                  <p>{this.state.genderRate}</p>
                </div>
              </div>
            </div>
          </div>
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