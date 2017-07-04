/*
 * Camera Container
 */

import { connect } from 'react-redux'
import Cam from '../components/Camera'
import { takePicture } from '../actions/camera'

/* Map components props to an action dispatch */
function mapDispatchToProps(dispatch){
  return {
    takePicture: (data) => {
      dispatch(takePicture(data))
    }
  }
}
/* Map components props to current state of store */
function mapStateToProps(state) {
  return ({
    path: state.path
  })
}

const CameraContainer = connect(mapStateToProps, mapDispatchToProps)(Cam)
export default CameraContainer
