import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator, } from 'react-navigation';

import Camera from '../containers/CameraContainer';
import Feed from '../containers/FeedContainer';
import Picture from '../containers/PictureContainer';
import Login from '../containers/LoginContainer';

const cameraStack = StackNavigator({
  Camera: {
     screen: Camera,
     navigationOptions: () => ({
      header: null,
    }),
  },
  Picture: {
    screen: Picture,
    navigationOptions: () => ({
     header: null,
   }),
 },
}, {
  initalRouteName: 'Camera',
  title: 'Welcome',
  header: null
});
export const AppNavigator = TabNavigator({
  Login: { screen: Login },
  Home: { screen: cameraStack },
  Feed: { screen: Feed},
}, {
  initialRouteName: 'Login',
});

class App extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const mapStateToProps = (state) => ({
  nav: state.navReducer
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState
