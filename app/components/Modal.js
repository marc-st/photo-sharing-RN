/*
 * Modal Presentational Component
 */

import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {View, Button, } from 'react-native';
import styles from '../styles';
import LoginContainer from '../containers/LoginContainer';
import PropTypes from 'prop-types';

class Mod extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: !this.props.loggedIn
    }
  }
  render() {
    return (
        <Modal isVisible={this.state.visible}
          style={{alignItems: 'center'}}
          animationIn={'slideInUp'}
          animationInTiming={300}
          animationOut={'slideOutDown'}>
          <View style={styles.modalContent}>
            {this.props.loggedIn ?
            <Button
              title="Continue"
              onPress={()=> this.setState({visible: false})}/>
            : <LoginContainer /> }
          </View>
        </Modal>
    );
  }
}
export default Mod
