import { connect } from 'react-redux';
import { State } from '../../reducers';
import { LoginPage } from './loginPage';

export const mapStateToProps = (state: State): any => ({
  list: [],
});

export const mapDispatchToProps = (dispatch: any): any => ({
});

export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
