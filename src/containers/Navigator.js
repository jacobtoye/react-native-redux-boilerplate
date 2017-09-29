import { StackNavigator } from 'react-navigation';

import {
  HomeScreen,
  WelcomeScreen,
} from '../screens';

const Navigator = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: { screen: HomeScreen },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
  },
});

export default Navigator;
