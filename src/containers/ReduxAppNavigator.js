import React from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import * as Routes from 'constants/routes';
import ProfileScreen from './ProfileScreen';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';

const MainTabNavigator = TabNavigator({
  [Routes.WELCOME_ROUTE]: { screen: WelcomeScreen },
  [Routes.PROFILE_ROUTE]: { screen: ProfileScreen },
}, {
  navigationOptions: {
    tabBarVisible: false,
    swipeEnabled: true,
    animationEnabled: true,
  },
});

export const AppNavigator = StackNavigator({
  [Routes.SIGN_IN_ROUTE]: { screen: SignInScreen },
  [Routes.MAIN_ROUTE]: { screen: MainTabNavigator },
}, {
  headerMode: 'none',
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
