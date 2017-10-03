import React from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator,
} from 'react-navigation';

import * as Routes from 'constants/routes';
import { WelcomeScreen, ProfileScreen } from 'screens';
import SignInScreen from './SignInScreen';

export const MainNavigator = StackNavigator({
  [Routes.WELCOME_ROUTE]: { screen: WelcomeScreen },
  [Routes.PROFILE_ROUTE]: { screen: ProfileScreen },
}, {
  initialRouteName: Routes.WELCOME_ROUTE,
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
  },
});

export const AppNavigator = StackNavigator({
  [Routes.SIGN_IN_ROUTE]: { screen: SignInScreen },
  [Routes.MAIN_ROUTE]: { screen: MainNavigator },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
  },
});

class Navigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
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
