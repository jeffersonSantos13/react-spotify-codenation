import React from 'react';
import PropTypes from 'prop-types';

import './WelcomeBox.scss';

const WelcomeBox = ({ name }) => (
  <div className="welcome-box" data-testid="welcome-box">
    <div className="container">
      <span>Bem vindo <strong>{name}</strong></span>
    </div>
  </div>
);

WelcomeBox.defaultProps = {
  name: '',
};

WelcomeBox.propTypes = {
  name: PropTypes.string,
};

export default WelcomeBox;