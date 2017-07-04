import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class AuthButton extends Component {
  render(){
    return (
      <Button
        title={this.props.isLoggedIn ? 'Log Out' : 'Open Login Screen'}
        onPress={this.props.isLoggedIn ? this.props.logout : this.props.loginScreen}
      />
    );
  }
  logout(){
    this.props.logout();
  }
  loginScreen(){
    this.props.loginScreen();
  }
}

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

export default AuthButton
