import * as CameraActions from './camera';
import * as LoginActions from './login';
import * as PictureActions from './picture';

/*
 * Group up all Camera Actions and Login Actions and put them in Action Creators
 */

export const ActionCreators = Object.assign( {},
  CameraActions,
  LoginActions,
  PictureActions,
);
