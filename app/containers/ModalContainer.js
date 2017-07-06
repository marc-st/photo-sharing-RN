/*
 * Modal Container
 */

import { connect } from 'react-redux'
import Mod from '../components/Modal'

/* Map components props to current state of store */
function mapStateToProps(state) {
  return ({
    loggedIn: state.onLogin.loggedIn
  })
}
const ModalContainer = connect(mapStateToProps, null)(Mod)
export default ModalContainer
