
import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, } from 'react-native';
import SendButton from './SendButton';
import PropTypes from 'prop-types'

class Picture extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          style= {{flex: 5}}
          source={{uri: this.props.path}}
        />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
        <SendButton
          style= {{flex: 1, textAlign: 'center', fontSize: 25}}
          onPress={}
        > Send </SendButton>
        <Text
          style= {{flex: 1, textAlign: 'center', fontSize: 25}}
          onPress={}
        > Cancel </Text>
        </View>
      </View>
    );
  }
}

export default Picture
