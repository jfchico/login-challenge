import * as React from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { AuthUser } from '../../model';
import { DASHBOARD_URI, LOGIN_BUTTON_LABEL, LOGIN_ERROR_MESSAGE} from '../../constants';

import './loginPage.scss';

export interface LoginPageDataProps {
  loggedUser: AuthUser;
};

export interface LoginPageMethodsProps {
  handleLogin: (googleData: any) => void;
}

type LoginProps = LoginPageDataProps & LoginPageMethodsProps;

export const LoginPage: React.FC<LoginProps> = (props: LoginProps): JSX.Element => {
  const [loginError, setLoginError] = React.useState(false);
  const history = useHistory();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ? process.env.REACT_APP_GOOGLE_CLIENT_ID : '675980648818-t4dr5o1d5pi9gbeq153t4n50juk9e6m2.apps.googleusercontent.com';

  React.useEffect(() => {
    if (props?.loggedUser?.name) {
      history.push(DASHBOARD_URI);
    }
  }, [props]);

  return (
    <div className="main-container">
      <div className="auth-content">
        <GoogleLogin
          clientId={clientId}
          buttonText={LOGIN_BUTTON_LABEL}
          onSuccess={props.handleLogin}
          onFailure={() => {
            setLoginError(true);
          }}
          cookiePolicy={'single_host_origin'}
        />
        {loginError && <span className="login-error">{LOGIN_ERROR_MESSAGE}</span>}
      </div>
    </div>
  );
}
