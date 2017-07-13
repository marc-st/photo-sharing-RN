/*
 * Picture Container
 */

import Picture from '../components/Picture'
import { connect } from 'react-redux'
import { uploadImage } from '../actions/picture'

function mapStateToProps(state) {
  return {
    path: state.takePicture.path,
    imageUploading: state.uploadImage.imageUploading,
    uploadFinished: state.uploadImageComplete.uploadFinished
  }
}
function mapDispatchToProps(dispatch) {
  return {
    uploadImage: (path) => {
      dispatch(uploadImage(path))
    }
  }
}
const PictureContainer = connect(mapStateToProps, mapDispatchToProps)(Picture)
export default PictureContainer
