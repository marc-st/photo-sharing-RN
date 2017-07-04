/*
 * Login Container
 */

import { connect } from 'react-redux'
import Login from '../components/Login'
import { onLogin } from '../actions/camera'

/* Map components props to an action dispatch */
function mapDispatchToProps(dispatch, ownProps){
  return {
    onLogin: () => {
      ownProps.navigation.dispatch({type: 'Login'})
    }
  }
}
/* Map components props to current state of store */
function mapStateToProps(state) {
  return ({
    loggedIn: state.loggedIn
  })
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer
