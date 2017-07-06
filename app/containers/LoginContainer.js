/*
 * Login Container
 */

import { connect } from 'react-redux'
import Login from '../components/Login'
import { onLogin } from '../actions/login'

/* Map components props to an action dispatch */
function mapDispatchToProps(dispatch){
  return {
    onLogin: (loggedIn) => {
      dispatch(onLogin(loggedIn))
    }
  }
}
const LoginContainer = connect(null, mapDispatchToProps)(Login)
export default LoginContainer
