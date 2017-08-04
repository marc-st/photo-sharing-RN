/*
 * Login Presentational Component
 */
import React, { Component } from 'react';
import { View, } from 'react-native';

import FBSDK from 'react-native-fbsdk';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase'

const { LoginButton, } = FBSDK;

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
                AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                  const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
                  firebase.auth().signInWithCredential(credential).then((result) => {
                    // Promise successful
                  }, (error) => {

                  })
                }, (error) => {
                  console.log('Some error occured' + error)
                })
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
