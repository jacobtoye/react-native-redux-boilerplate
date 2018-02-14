import React from 'react';
import { connect } from 'react-redux';
import { Platform, BackHandler } from 'react-native';
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import {
  Modal1,
  Modal2,
  WelcomeScreen,
} from 'screens';
import * as Routes from 'constants/routes';

import ProfileScreen from './ProfileScreen';
import SignInScreen from './SignInScreen';

const ModalTabNavigator = StackNavigator({
  [Routes.MODAL1_ROUTE]: { screen: Modal1 },
  [Routes.MODAL2_ROUTE]: { screen: Modal2 },
}, {
  mode: 'modal',
  headerMode: 'none',
  transitionConfig: getSlideFromRightTransition,
});

const MainTabNavigator = StackNavigator({
  [Routes.WELCOME_ROUTE]: { screen: WelcomeScreen, transitionConfig: getSlideFromRightTransition },
  [Routes.PROFILE_ROUTE]: { screen: ProfileScreen, transitionConfig: getSlideFromRightTransition },
  [Routes.MODAL_NAV_ROUTE]: { screen: ModalTabNavigator },
}, {
  headerMode: 'none',
});

export const AppNavigator = StackNavigator({
  [Routes.SIGN_IN_ROUTE]: { screen: SignInScreen },
  [Routes.MAIN_ROUTE]: { screen: MainTabNavigator },
}, {
  headerMode: 'none',
});

class Navigation extends React.Component {
  componentWillMount() {
    if (Platform.OS !== 'android') {
      return;
    }

    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;

      // This assumes that we always want to clsoe the app when you are at the first screen
      // of the top most navigator or at the first screen of the first level of nested navigators
      if (nav.index === 0) {
        if (!nav.routes[0].index) {
          return false;
        } else if (nav.routes[0].index === 0) {
          return false;
        }
      }

      dispatch(NavigationActions.back());

      return true;
    });
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    const { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigation);
