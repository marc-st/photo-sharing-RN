import { connect } from 'react-redux'
import LoginStatusMessage from '../components/LoginStatusMessage'

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const LoginStatusContainer =  connect(mapStateToProps)(LoginStatusMessage);
export default LoginStatusContainer
