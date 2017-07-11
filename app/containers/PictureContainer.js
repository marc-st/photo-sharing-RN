/*
 * Picture Container
 */

import Picture from '../components/Picture'
import { connect } from 'react-redux'
import { uploadImage } from '../actions/picture'

function mapStateToProps(state) {
  return {
    path: state.takePicture.path
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
