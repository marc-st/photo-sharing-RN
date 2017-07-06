/*
 * Camera Presentational Component
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { Text, Image, View, } from 'react-native';
import ModalContainer from '../containers/ModalContainer'
import PropTypes from 'prop-types';

import styles from '../styles';
import LoginContainer from '../containers/LoginContainer'

class Cam extends Component {
  render() {
    return (
      <View style={{flex: 7}}>
        <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={{flex: 7, alignItems: 'center', justifyContent: 'flex-end'}}
           aspect={Camera.constants.Aspect.fill}
           captureTarget={Camera.constants.CaptureTarget.disk}>
           <Text
             style={styles.capture}
             onPress={() => {this._onCapture()}}>
             [CAPTURE]
           </Text>
       </Camera>
       <ModalContainer />
      </View>
    );
  }

  _onCapture = () => {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
    // call takePicture (action) from props
      .then((data) => this.props.takePicture(data))
      .catch(err => console.error(err));
  }
}
Cam.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Cam
