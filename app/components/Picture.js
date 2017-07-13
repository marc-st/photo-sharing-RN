/*
 * Picture Presentational Component
 */

import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, ActivityIndicator, } from 'react-native';
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
        {this.props.imageUploading &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' />
          </View>
        }
        {this.props.uploadFinished && this.props.navigation.navigate('Feed')}
      </View>
    );
  }
  _sendPicture = () => {
    console.log(this.props.path);
    // call uploadImage (action) from props
    this.props.uploadImage(this.props.path)
  }
}

export default Picture
