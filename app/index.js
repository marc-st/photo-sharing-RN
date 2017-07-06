// @flow
import React, {Component} from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import {Provider, connect} from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

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

console.log(store.getState());

const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default Root
