/*
 * Photo Feed Presentational Component
 */
import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import { storage } from '../index';

class Feed extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
  }
  render() {
    return (
      <View>
        <Text>
          Welcome to the Feed
        </Text>
      </View>
    );
  }
}
export default Feed
