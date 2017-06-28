/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob'
import 'whatwg-fetch'
import {
  AppRegistry, StyleSheet, Platform, Text, Image, View, FlatList,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
      location: null,
      error: null,
    };
  }
  static navigationOptions = {
    title: 'Camera',
  };

  takePicture() {
    navigator.geolocation.getCurrentPosition(
       (position) => {

         this.setState({location: position});

         const options = {
           location: this.state.location,
         };

         this.camera.capture({metadata: options})
           .then((data) => {
             this.setState({path: data.path})
           })
           .catch(err => console.error(err));

       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
     );
  }

  renderCamera(){
    return (
      <View style={styles.container}>
        <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}
           captureTarget={Camera.constants.CaptureTarget.disk}>
           <Text
             style={styles.capture}
             onPress={this.takePicture.bind(this)}>
             [CAPTURE]
           </Text>
       </Camera>
      </View>
    );
  }
  renderImage(){
    return (
      <View style={{flex: 1}}>
        <Image
          style= {{flex: 5}}
          source={{uri: this.state.path}}
        />
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
        <Text
          style= {{flex: 1, textAlign: 'center', fontSize: 25}}
          onPress={this.uploadImage.bind(this)}
        > Send </Text>
        <Text
          style= {{flex: 1, textAlign: 'center', fontSize: 25}}
          onPress={() => this.setState({ path : null })}
        > Cancel </Text>
        </View>
      </View>
    );
  }
  uploadImage(){
    /**
    const { navigate } = this.props.navigation;
    RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/marc-stevens/image/upload', {
      'Content-Type': 'multipart/form-data'
    }, [
      {name: 'file', filename: 'photo1.jpg', data: RNFetchBlob.wrap(this.state.path)},
      {name: 'upload_preset', data: 'yirlspc9'}
    ])
    .uploadProgress((written, total) => {
        console.log('uploaded', written / total)
    }).then((res) => {
      this.setState({path: null});
      //navigate('Feed');
    })
    .catch((err) => {
      // error handling ..
    }); */

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.log(request.responseText);
      }
    };
    request.open('GET', 'https://api.cloudinary.com/v1_1/marc-stevens/resources/image');
    request.send();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

  class PhotoScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstload: true
      };
    }
    static navigationOptions = {
      title: 'Feed',
    };
    render(){
      return(
        <View>
          <ImageList
            />
        </View>
      );
    }
  }
  class ImageListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
    render(){
      this.downloadImage();
      return (
        <Image
          {...this.props}
          source={{uri: this.state.path}}
          onPress={this._onPress}
        />
      );
    }
    downloadImage(){
    }
  }
  class ImageList extends React.PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
      this.setState((state) => {
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id));
        return {selected};
      });
    };
    _renderItem = ({item}) => (
      <ImageListItem
        id = {item.id}
        onPressItem = {this._onPressItem}
        selected = {!!this.state.selected.get(item.id)}
        title = {item.title}
        />
    );
    render(){
      return (
          <FlatList
            data = {this.props.data}
            extraData = {this.state}
            keyExtractor = {this._keyExtractor}
            renderItem = {this._renderItem}
            />
      );
    }
  }

  const App = TabNavigator ({
    Camera: {screen: CameraScreen},
    Feed: {screen: PhotoScreen},
  });

  const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection: 'row',
    },
    preview: {
      flex: 3,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    },
    cancelPicture: {
      position: 'absolute',
      right: 20,
      top: 20,
      backgroundColor: 'transparent',
      color: '#FFF',
      fontWeight: '600',
      fontSize: 17,
    }
  });

AppRegistry.registerComponent('AwesomeProject', () => App);
