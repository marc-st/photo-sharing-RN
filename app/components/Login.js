/*
 * Login Presentational Component
 */

import FBSDK from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';
const { LoginButton, } = FBSDK;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, } from 'react-native';

class Login extends Component {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                this._onLogin()
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
  _onLogin = () => {
    console.log(this.props);
    const loggedIn = true;
    this.props.onLogin(loggedIn);
  }
}
export default Login
