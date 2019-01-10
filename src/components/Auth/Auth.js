import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

import googleButton from '../../images/GoogleImage.png';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch(err => console.error('there is an error with authenticate user', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn" onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button" width="500px" />
        </button>
      </div>
    );
  }
}

export default Auth;
