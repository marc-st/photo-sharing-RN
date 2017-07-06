import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const onLogin  = createReducer({}, {
  [types.LOGIN](state, action){
    return {
      ...state,
      loggedIn: action.loggedIn
      }
    }
});
