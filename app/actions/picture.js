import imageUploadPromise from '../lib/api'

export function uploadImage(path){
  return (dispatch, getState) => {
    return imageUploadPromise(path)
      .then(url => console.log(url))
      .catch(error => console.log(error));
  }
}
