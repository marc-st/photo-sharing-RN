import * as CameraActions from './camera';
import * as LoginActions from './login';

/*
 * Group up all Camera Actions and Login Actions and put them in Action Creators
 */

export const ActionCreators = Object.assign( {},
  CameraActions,
  LoginActions,
);
