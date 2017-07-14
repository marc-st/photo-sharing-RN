import { combineReducers } from 'redux'

import * as cameraReducer from './camera';
import * as loginReducer from './login';
import * as navReducer from './navReducer';
import * as pictureReducer from './picture';
import * as feedReducer from './feed';

export default combineReducers(Object.assign(
  cameraReducer,
  loginReducer,
  navReducer,
  pictureReducer,
  feedReducer
  ));
