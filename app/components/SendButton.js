
import React, { Component } from 'react';
import {Text, Image, View, TouchableHighlight, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles'

const SendButton = ({onClickSend}) => {}
  render() {
    return (
      <TouchableHighlight
        onPress = {onClickSend}>
        <View styles={styles.sendButton}>
          <Text> Send </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

SendButton.propTypes = {
  onClickSend: PropTypes.func.isRequired
}

export default SendButton
