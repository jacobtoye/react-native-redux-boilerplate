import { SIGN_IN_ROUTE } from 'constants/routes';
import { AppNavigator } from 'containers/ReduxAppNavigator';

// https://github.com/react-community/react-navigation/issues/1041
const INITIAL_STATE =
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(SIGN_IN_ROUTE),
  );

export const nav = (state = INITIAL_STATE, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // TODO: add in actions from each nav

  return nextState || state;
};

export default nav;
