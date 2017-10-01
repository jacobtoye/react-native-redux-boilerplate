import { AppNavigator } from 'containers/ReduxAppNavigator';

// TODO: SignIn should be a constant
const INITIAL_STATE =
  AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('SignIn'));

export const nav = (state = INITIAL_STATE, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

export default nav;
