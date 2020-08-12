import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '',
      name: '',
      imageUrl: '',
    };
  }

  componentDidMount() {
    const { name, url } = this.props;

    const index = url.split('/')[url.split('/').length - 2];
    const setIndex = (index.length === 3) ? index : (('0').repeat(3 - index.length) + index);
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${setIndex}.png`;

    this.setState({
      name,
      imageUrl,
      index: (index.length === 3) ? index : (('0').repeat(3 - index.length) + index),
    });
  }

  render() {
    const { index, name, imageUrl } = this.state;
    return (
      <Link to={`/pokemon/${name}`} id="link-pokemon" data-testid="pokemon_name">
        <div id="pokemon-card">
          <div id="pokemon-title">
            <h2 data-testid="pokemon_index">
              #
              {index}
            </h2>
          </div>
          <div id="pokemon-body">
            <img src={imageUrl} alt="" data-testid="pokemon_img" />
            <h3>
              {name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </h3>
          </div>
        </div>
      </Link>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

Pokemon.defaultProps = {
  name: '',
  url: '',
};

export default withRouter(Pokemon);
