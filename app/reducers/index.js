import { combineReducers } from 'redux'
import * as cameraReducer from './camera';
import * as loginReducer from './login';
import * as navReducer from './navReducer';

export default combineReducers(Object.assign(
  cameraReducer,
  loginReducer,
  navReducer
  ));
