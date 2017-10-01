import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import {
  SignInScreen,
  WelcomeScreen,
} from 'screens';

export const AppNavigator = StackNavigator({
  SignIn: { screen: SignInScreen },
  Welcome: { screen: WelcomeScreen },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
  },
});

// TODO: Add in support for the Android back button
const Navigation = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigation);
