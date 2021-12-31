import { connect } from 'react-redux';
import { State } from '../../reducers';
import { LoginPage, LoginPageDataProps, LoginPageMethodsProps } from './loginPage';
import { handleLogin } from '../../actions';

export const mapStateToProps = (state: State): LoginPageDataProps => ({
  loggedUser: state.loginReducer.authed,
});

export const mapDispatchToProps = (dispatch: any): LoginPageMethodsProps => ({
  handleLogin: (googleData: any) => {
    dispatch(handleLogin(googleData));
  },
});

export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
