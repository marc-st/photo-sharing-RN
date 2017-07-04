import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login Screen
        </Text>
        <Button
          onPress={() => {this._onLogin()}}
          title="Log in"
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

export default Login;
