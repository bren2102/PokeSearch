/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { boolHome, cleanInput } from '../actions/index';

class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    const { setBool, clearInput } = props;
    setBool(true);
    clearInput();
    this.state = {
      index: '',
      name: '',
      type: [],
      entriesText: [],
      eggGroups: [],
      color: [],
      height: '',
      weight: '',
      abilities: [],
      captureRate: '',
      baseHappiness: '',
      baseExperience: '',
      growthRate: [],
      genderRate: '',
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    axios.get(pokemonUrl)
      .then(data => {
        console.log(data.data.types[0].type.name);
        this.setState({
          color: data.data.types[0].type.name,
          name: data.data.name,
          index: ((data.data.id).toString().length === 3) ? data.data.id : (('0').repeat(3 - (data.data.id).toString().length) + data.data.id),
          type: data.data.types,
          height: (data.data.height) / 10,
          weight: (data.data.weight) / 10,
          abilities: data.data.abilities,
          baseExperience: data.data.base_experience,
        });
      });

    axios.get(pokemonSpecies)
      .then(data => {
        this.setState({
          entriesText: data.data.flavor_text_entries.filter(language => language.language.name.match('en')).map(text => text.flavor_text),
          eggGroups: data.data.egg_groups,
          // color: data.data['color'].name,
          captureRate: data.data.capture_rate,
          baseHappiness: data.data.base_happiness,
          growthRate: data.data.growth_rate.name,
          genderRate: data.data.gender_rate,
        });
      });
  }

  bgColor(type) {
    switch (type) {
      case 'fire': {
        return '#FFA756';
      }
      case 'fairy': {
        return '#EBA8C3';
      }
      case 'grass': {
        return '#8BBE8A';
      }
      case 'water': {
        return '#58ABF6';
      }
      case 'bug': {
        return '#8BD674';
      }
      case 'normal': {
        return '#B5B9C4';
      }
      case 'poison': {
        return '#9F6E97';
      }
      case 'electric': {
        return '#F2CB55';
      }
      case 'ground': {
        return '#F78551';
      }
      case 'fighting': {
        return '#EB4971';
      }
      default: return '#ea5d60';
    }
  }

  render() {
    const long = this.state.entriesText.length;
    const { color } = this.state;
    const pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.index}.png`;
    return (
      <div id="pokemon-details">
        <div id="top-name" style={{ backgroundColor: this.bgColor(color) }}>
          <h2 data-testid="index">
            #
            {this.state.index}
          </h2>
        </div>
        <div id="details-content">
          <div id="left-side">
            <img src={pokemonImg} alt="" data-testid="img"/>
            <h2 style={{ color: this.bgColor(color) }} data-testid="name">
              {this.state.name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </h2>
            <p>
              "
              {this.state.entriesText[Math.floor(Math.random() * long)]}
              "
            </p>
          </div>
          <div id="right-side">
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(color) }}>Pokedex Data</h4>
              <div className="groups">
                <h4>Height: </h4>
                <div className="map-groups">
                  <p data-testid="height">
                    {this.state.height}
                    {' '}
                    m
                  </p>
                </div>
              </div>
              <div className="groups">
                <h4>Weight: </h4>
                <div className="map-groups">
                  <p data-testid="weight">
                    {this.state.weight}
                    {' '}
                    kg
                  </p>
                </div>
              </div>
              <div className="groups">
                <h4>Types: </h4>
                <div className="map-groups">
                  {this.state.type.map(type => <p data-testid="type">{type.type.name}</p>)}
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="ability">Abilities: </h4>
                <div className="map-groups">
                  {this.state.abilities.map(group => <p>{group.ability.name}</p>)}
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(color) }}>Training</h4>
              <div className="groups">
                <h4>Capture rate: </h4>
                <div className="map-groups">
                  <p data-testid="captureRate">{this.state.captureRate}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Base Friendship: </h4>
                <div className="map-groups">
                  <p data-testid="basehapiness">{this.state.baseHappiness}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Base Experience: </h4>
                <div className="map-groups">
                  <p data-testid="basexperience">{this.state.baseExperience}</p>
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="growthrate">Growth Rate: </h4>
                <div className="map-groups">
                  <p>{this.state.growthRate}</p>
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(color) }}>Breeding</h4>
              <div className="groups">
                <h4 data-testid="egggroup">Egg Groups: </h4>
                <div className="map-groups">
                  {this.state.eggGroups.map(group => <p >{group.name}</p>)}
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="genderate">Gender Rate: </h4>
                <div className="map-groups">
                  <p >{this.state.genderRate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokeDetails.propTypes = {
  setBool: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setBool: bool => dispatch(boolHome(bool)),
  clearInput: () => dispatch(cleanInput()),
});

export default connect(null, mapDispatchToProps)(withRouter(PokeDetails));
