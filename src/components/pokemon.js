import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props){
    super(props);
    const { id, name, generation,  } = props;
  }
}

Book.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  generation: PropTypes.string,
};

Book.defaultProps = {
  id: 0,
  name: null,
  generation: null,
};

export default Pokemon; 