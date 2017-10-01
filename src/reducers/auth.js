import { SET_AUTH } from 'actions/types';
import * as AuthService from 'services/auth';

const INITIAL_STATE = {
  loggedIn: AuthService.loggedIn(),
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, loggedIn: action.newAuthState };
    default:
      return state;
  }
};

export default auth;
