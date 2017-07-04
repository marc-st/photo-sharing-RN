import { connect } from 'react-redux'
import AuthButton from '../components/AuthButton'
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

const AuthButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AuthButton);
export default AuthButtonContainer
