import { fork } from 'redux-saga/effects';

import {
  loginFlow,
  logoutFlow,
  registerFlow,
} from './auth';

export default function* root() {
  yield [
    yield fork(loginFlow),
    yield fork(logoutFlow),
    yield fork(registerFlow),
  ];
}
