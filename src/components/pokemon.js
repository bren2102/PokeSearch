import React from 'react';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  state = {
    index: '',
    name: '',
    imageUrl: '',
    generation: ''
  };

  componentDidMount() {
    const { name, url } = this.props;

    const index = url.split('/')[url.split('/').length - 2];
    console.log(index)
    const setIndex = (index.length === 3) ? index : (('0').repeat(3 - index.length) + index)
    //const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
    const imageUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${setIndex}.png`;

    this.setState({
      name,
      imageUrl,
      index: (index.length === 3) ? index :(('0').repeat(3-index.length)+index)
    });
  }
 
  render(){
    return(
      <div id="pokemon-card">
        <div id="159pokemon-tile">
          <h2>#{this.state.index}</h2>
        </div>
        <div id="pokemon-body">
          <img src={this.state.imageUrl}></img>
          <h3>{this.state.name
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}</h3>
        </div>
        
      </div>
    );
  }
}

Pokemon.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  generation: PropTypes.string,
};

Pokemon.defaultProps = {
  id: 0,
  name: null,
  imageURL: null,
  generation: null,
};

export default Pokemon;