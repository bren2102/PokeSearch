/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { boolHome, cleanInput, showDetails } from '../actions/index';

class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    const { setBool, clearInput } = props;
    setBool(true);
    clearInput();
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    const { details } = this.props;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    axios.get(pokemonUrl)
      .then(data => {
        details(data, 1)
      });

    axios.get(pokemonSpecies)
      .then(data => {
        details(data, 2)
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
    const { listDetails } = this.props
    const long = listDetails.entriesText.length;
    const pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${listDetails.index}.png`;
    return (
      <div id="pokemon-details">
        <div id="top-name" style={{ backgroundColor: this.bgColor(listDetails.color) }}>
          <h2 data-testid="index">
            #
            {listDetails.index}
          </h2>
        </div>
        <div id="details-content">
          <div id="left-side">
            <img src={pokemonImg} alt="" data-testid="img"/>
            <h2 style={{ color: this.bgColor(listDetails.color) }} data-testid="name">
              {listDetails.name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </h2>
            <p>
              "
              {listDetails.entriesText[Math.floor(Math.random() * long)]}
              "
            </p>
          </div>
          <div id="right-side">
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(listDetails.color) }}>Pokedex Data</h4>
              <div className="groups">
                <h4>Height: </h4>
                <div className="map-groups">
                  <p data-testid="height">
                    {listDetails.height}
                    {' '}
                    m
                  </p>
                </div>
              </div>
              <div className="groups">
                <h4>Weight: </h4>
                <div className="map-groups">
                  <p data-testid="weight">
                    {listDetails.weight}
                    {' '}
                    kg
                  </p>
                </div>
              </div>
              <div className="groups">
                <h4>Types: </h4>
                <div className="map-groups">
                  {listDetails.type.map(type =>
                    <p data-testid="type" key={type.type.name}>{type.type.name}</p>
                  )}
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="ability">Abilities: </h4>
                <div className="map-groups">
                  {listDetails.abilities.map(group => 
                    <p key={group.ability.name}>{group.ability.name}</p>)}
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(listDetails.color) }}>Training</h4>
              <div className="groups">
                <h4>Capture rate: </h4>
                <div className="map-groups">
                  <p data-testid="captureRate">{listDetails.captureRate}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Base Friendship: </h4>
                <div className="map-groups">
                  <p data-testid="basehapiness">{listDetails.baseHappiness}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Base Experience: </h4>
                <div className="map-groups">
                  <p data-testid="basexperience">{listDetails.baseExperience}</p>
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="growthrate">Growth Rate: </h4>
                <div className="map-groups">
                  <p>{listDetails.growthRate}</p>
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(listDetails.color) }}>Breeding</h4>
              <div className="groups">
                <h4 data-testid="egggroup">Egg Groups: </h4>
                <div className="map-groups">
                  {listDetails.eggGroups.map(group => <p key={group.name}>{group.name}</p>)}
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="genderate">Gender Rate: </h4>
                <div className="map-groups">
                  <p >{listDetails.genderRate}</p>
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
  listDetails: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  setBool: bool => dispatch(boolHome(bool)),
  clearInput: () => dispatch(cleanInput()),
  details: (detail, update) => dispatch(showDetails(detail, update))
});

const mapStateToProps = state => ({
  listDetails: state.details,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokeDetails));
