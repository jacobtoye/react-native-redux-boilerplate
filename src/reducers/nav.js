import { NavigationActions } from 'react-navigation';

import {
  MAIN_ROUTE,
  SIGN_IN_ROUTE,
  WELCOME_ROUTE,
} from 'constants/routes';
import { AppNavigator } from 'containers/ReduxAppNavigator';

import { RESET_TO_MAIN } from 'actions/types';

// https://github.com/react-community/react-navigation/issues/1041
const INITIAL_STATE =
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(SIGN_IN_ROUTE),
  );

export const nav = (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case RESET_TO_MAIN:
    {
      const resetAction = NavigationActions.reset({
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
      nextState = AppNavigator.router.getStateForAction(resetAction, state);
      break;
    }
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default nav;
