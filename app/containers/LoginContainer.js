/*
 * Login Container
 */

import { connect } from 'react-redux'
import Login from '../components/Login'
import { onLogin } from '../actions/login'

function mapStateToProps(state) {
  return ({
    loggedIn: state.onLogin.loggedIn
  })
}
/* Map components props to an action dispatch */
function mapDispatchToProps(dispatch){
  return {
    onLogin: (loggedIn) => {
      dispatch(onLogin(loggedIn))
    }
  }
}
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer
