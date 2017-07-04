import { combineReducers } from 'redux'
import * as cameraReducer from './camera';
import * as navReducer from './navReducer'

export default combineReducers(Object.assign(
  cameraReducer,
  navReducer
  ));
