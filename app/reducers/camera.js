import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const takePicture  = createReducer({}, {
  [types.TAKE_PICTURE](state, action){
    return {
      ...state,
      path: action.path
      }
    }
});
