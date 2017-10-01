import { combineReducers } from 'redux';

import { auth } from './auth';
import { nav } from './nav';
import { ui } from './ui';

export default combineReducers({
  auth,
  nav,
  ui,
});
