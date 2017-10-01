import { StackNavigator } from 'react-navigation';

import {
  SignInScreen,
  WelcomeScreen,
} from 'screens';

const Navigator = StackNavigator({
  SignIn: { screen: SignInScreen },
  Welcome: { screen: WelcomeScreen },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
  },
});

export default Navigator;
