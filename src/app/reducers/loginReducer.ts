import { LOGIN_AUTH } from '../actions/actionsTypes';

export interface AuthUser {
  email: string;
  name: string;
  tokenId: string;
}

export interface LoginState {
  authed: AuthUser;
}

export const initialLoginState: LoginState = {
  authed: null,
}

export const loginReducer = (state = initialLoginState, action: { type: string; payload: AuthUser; }): LoginState => {
  switch (action.type) {
    case LOGIN_AUTH:
      return {...state, authed: action.payload};
    default:
      return state;
  }
};
