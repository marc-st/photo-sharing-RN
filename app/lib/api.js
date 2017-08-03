import RNFetchBlob from 'react-native-fetch-blob'
import { Platform, } from 'react-native'

import { storage } from '../index'
import { database } from '../index'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const writeImageData = (imageId, url, lat, lon) => {
  database.ref('images/' + imageId).set({
    imageUrl : url,
    latitude: lat,
    longitude: lon
  });
}

const getURL = (ref) => {
  return ref.getDownloadURL().then(function(url) {
    return url;
  });
}

const imageUploadPromise = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      const sessionId = new Date().getTime()
      let uploadBlob = null
      const imageRef = storage.ref('images').child(`${sessionId}`)

      fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        // call async function to retrieve URL
        const url = getURL(imageRef);
        // retrieve current location
        navigator.geolocation.getCurrentPosition(
           (position) => {
             if(position != null){
               // if we have a position, write data to firebase
               writeImageData(sessionId, url,
                 position.coords.latitude, position.coords.longitude)
             }
           },
           (error) => console.log(error.message),
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
         );
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default imageUploadPromise;
