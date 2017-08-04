/*
 * Photo Feed Presentational Component
 */
import React, {Component} from 'react';
import { View, Text, FlatList, Image, } from 'react-native';
import { List, ListItem, } from 'react-native-elements';

import { database } from '../index';
import { styles } from '../styles';

class Feed extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.listenForChanges(database.ref('images'));

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      // dispatch action to put position in state
      this.props.updatePosition(position.coords.latitude, position.coords.longitude)
    });
  }
  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID);
  }
  listenForChanges(imageRef) {
    imageRef.on('value', (dataSnapshot) => {
      var images = [];
      dataSnapshot.forEach((image) => {
        image.forEach((url) => {
          images.push({
            url: url.val().va,
            key: image.key
          });
          return true;
        });
      });
      this.props.loadFeed(images)
    });
  }
  render() {
    return (
      <View>
          <FlatList
            data = {this.props.data}
            renderItem = {( {item} ) => (
              <Image
                source={{ uri: item.url }}
                style={{ height: 200 }}
              />
            )}
            keyExtractor={item => item.key}
            />
      </View>
    );
  }
}
export default Feed
