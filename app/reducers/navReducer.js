import { NavigationActions } from "react-navigation";
import { AppNavigator } from '../containers/AppNavigator';

let initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);
// Set the inital state of the app to the Camera
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');

initialNavState = AppNavigator.router.getStateForAction(
    firstAction,
    initialNavState
  );

export const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
