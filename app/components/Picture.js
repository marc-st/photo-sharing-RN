/*
 * Picture Presentational Component
 */

import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, } from 'react-native';
import PropTypes from 'prop-types'

class Picture extends Component {
  render() {
    console.log(this.props.path);
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
              onPress={() => console.log('cancelled')}>
              <Text style ={{textAlign: 'center', fontSize: 25}}>
                Cancel
              </Text>
            </TouchableHighlight>
          </View>
        </View>
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
