import imageUploadPromise from '../lib/api'
import * as types from './types'

export function uploadImage(path){
  return (dispatch, getState) => {
    dispatch(startImageUpload());

    return imageUploadPromise(path)
      .then(url =>
        dispatch(imageUploadComplete()))
      .catch(error => console.log(error));
  }
}
const startImageUpload = () => {
  return {
    type: types.START_IMAGE_UPLOAD
  }
}
const imageUploadComplete = () => {
  return {
    type: types.IMAGE_UPLOAD_COMPLETE
  }
}
