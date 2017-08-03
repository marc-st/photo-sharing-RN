
/*
 * Picture Presentational Component
 */

import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, } from 'react-native';
import PropTypes from 'prop-types'

import styles from '../styles'

class Picture extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          style= {{flex: 5}}
          source={{uri : this.props.path }}
        />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View
            style= {{flex: 1}}>
            <TouchableHighlight
              onPress={() => this._sendPicture()}>
              <Text style ={{textAlign: 'center', fontSize: 25}}>
                Send
              </Text>
            </TouchableHighlight>
          </View>
          <View
            style= {{flex: 1}}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Camera')}>
              <Text style ={{textAlign: 'center', fontSize: 25}}>
                Cancel
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
  _sendPicture(){
    // call uploadImage (action) from props
    this.props.uploadImage(this.props.path)
    // call navigate from navigation prop
    this.props.navigation.navigate('Feed')
  }
}

export default Picture
