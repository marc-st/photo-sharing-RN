import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessageContainer from '../containers/LoginStatusContainer';
import AuthButtonContainer from '../containers/AuthButtonContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <LoginStatusMessageContainer />
        <AuthButtonContainer />
      </View>
    );
  }
}


MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
