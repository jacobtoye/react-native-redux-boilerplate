import { NavigationActions } from 'react-navigation';

import {
  MAIN_ROUTE,
  SIGN_IN_ROUTE,
  WELCOME_ROUTE,
} from 'constants/routes';
import { AppNavigator } from 'containers/ReduxAppNavigator';

import { RESET_TO_MAIN, RESET_TO_SIGN_IN } from 'actions/types';

const INITIAL_STATE =
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(SIGN_IN_ROUTE),
  );

export const nav = (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case RESET_TO_SIGN_IN:
    {
      const resetToSignInAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: SIGN_IN_ROUTE }),
        ],
      });
      nextState = AppNavigator.router.getStateForAction(resetToSignInAction, state);
      break;
    }
    case RESET_TO_MAIN:
    {
      const resetToMainAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: MAIN_ROUTE,
            action: NavigationActions.navigate({
              routeName: WELCOME_ROUTE,
            }),
          }),
        ],
      });
      nextState = AppNavigator.router.getStateForAction(resetToMainAction, state);
      break;
    }
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default nav;
