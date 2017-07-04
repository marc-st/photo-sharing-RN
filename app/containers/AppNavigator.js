import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Login from '../containers/LoginContainer';
import Camera from '../containers/CameraContainer';
import Feed from '../containers/FeedContainer';
import MainScreen from '../components/MainScreen';

export const AppNavigator = TabNavigator({
  Login : {screen: Login },
  Main: {screen: MainScreen },
  Camera: { screen: Camera },
  Feed: { screen: Feed },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
