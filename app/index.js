// @flow
import React, {Component} from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import {Provider, connect} from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as firebase from 'firebase';

import reducer from './reducers'
import AppWithNavigationState from './containers/AppNavigator'
import styles from './styles'


/* Redux Logger */
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });


function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

/* Create Store instance */
const store = configureStore({});
// initial state of the store
console.log(store.getState());

//Initaliize Firebase
const config = {
  apiKey: "AIzaSyDfs0wyCbVzIDnTr7riI8DtIP7jtnlXQrc",
  authDomain: "photo-sharing-react-native.firebaseio.com",
  databaseURL: "https://photo-sharing-react-native.firebaseio.com/",
  storageBucket: "photo-sharing-react-native.appspot.com",
}
firebase.initializeApp(config)

export const storage = firebase.storage()
export const database = firebase.database()

const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default Root
