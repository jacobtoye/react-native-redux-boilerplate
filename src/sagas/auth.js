import { take, call, put, race } from 'redux-saga/effects';

import {
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SET_AUTH,
  LOGOUT,
  REQUEST_ERROR,
  RESET_TO_MAIN,
} from 'actions/types';
import * as AuthService from 'services/auth';

const a = function* aa() {};
export { a };

const authorize = function* authorize({ username, password, isRegistering = false }) {
  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const salt = null;// TODO: genSalt(username)
    const hash = '';// TODO: hashSync(password, salt)
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(AuthService.register, username, hash);
    } else {
      response = yield call(AuthService.login, username, hash);
    }

    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  } finally {
    yield put({ type: SENDING_REQUEST, sending: false });
  }
};

/**
 * Effect to handle logging out
 */
const logout = function* logout() {
  yield put({ type: SENDING_REQUEST, sending: true });

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(AuthService.logout);
    yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
    return false;
  }
};

/**
 * Log in saga
 */
const loginFlow = function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST);
    const { username, password } = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { username, password, isRegistering: false }),
      logout: take(LOGOUT),
    });

    if (winner.auth) {
      yield put({ type: SET_AUTH, newAuthState: true });

      // TODO: clear the login form
      // yield put({ type: CHANGE_FORM, newFormState: { username: '', password: '' } });

      yield put({ type: RESET_TO_MAIN });
    }
  }
};

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
const logoutFlow = function* logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    yield put({ type: SET_AUTH, newAuthState: false });

    yield call(logout);

    // TODO: redirect back to the login screen
    // forwardTo('/')
  }
};

/**
 * Register saga
 * Very similar to log in saga!
 */
const registerFlow = function* registerFlow() {
  while (true) {
    const request = yield take(REGISTER_REQUEST);
    const { username, password } = request.data;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(
      authorize,
      {
        username,
        password,
        isRegistering: true,
      });

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({ type: SET_AUTH, newAuthState: true });

      // TODO: clear the login form
      // yield put({ type: CHANGE_FORM, newFormState: { username: '', password: '' } });

      // User react-navigation to redirect back to the appropriate place
    }
  }
};

export {
  loginFlow,
  logoutFlow,
  registerFlow,
};
