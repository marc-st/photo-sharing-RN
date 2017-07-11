import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Camera from '../containers/CameraContainer';
import Feed from '../containers/FeedContainer';
import Picture from '../containers/PictureContainer';

export const AppNavigator = TabNavigator({
  Feed: { screen: Feed },
  Camera: { screen: Camera },
  Picture: {screen: Picture },
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
