import React from 'react';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  state = {
    id: '',
    name: '',
    imageURL: '',
    generation: ''
  };
 
  render(){
    const { id, name, imageURL, generation } = this.props;
    return(
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageURL: PropTypes.string,
  generation: PropTypes.string,
};

Pokemon.defaultProps = {
  id: 0,
  name: null,
  imageURL: null,
  generation: null,
};

export default Pokemon;