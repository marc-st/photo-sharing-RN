import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const uploadImage  = createReducer({}, {
  [types.START_IMAGE_UPLOAD](state, action){
    return {
      ...state,
      imageUploading: true
      }
    }
});
export const uploadImageComplete  = createReducer({}, {
  [types.IMAGE_UPLOAD_COMPLETE](state, action){
    return {
      ...state,
      imageUploading: false,
      uploadFinished: true,
      }
    }
});
