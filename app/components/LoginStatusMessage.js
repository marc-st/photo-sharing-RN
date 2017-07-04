import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class LoginStatusMessage extends Component {
  render () {
    if (!this.props.isLoggedIn) {
      return <Text>Please log in</Text>;
    }
    return (
      <View>
        <Text style={styles.welcome}>
          {'You are "logged in" right now'}
        </Text>
      </View>
    );
  }
}
LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default LoginStatusMessage
