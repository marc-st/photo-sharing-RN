import FBSDK from 'react-native-fbsdk';
const {
  LoginButton,
} = FBSDK;
import { LoginManager } from 'react-native-fbsdk';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, Button, } from 'react-native';

class Login extends Component {
  handleFacebookLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
          this.props.onLogin()
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render (){
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onPress={this.handleFacebookLogin}
        title="Continue with fb"
      />
      </View>
    );
  }
  _onLogin(){
    this.props.onLogin();
  }
}
Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};
Login.navigationOptions = {
  title: 'Log In',
};

export default Login
