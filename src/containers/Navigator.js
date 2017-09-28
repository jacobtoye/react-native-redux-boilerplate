import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import WelcomeScreen from '../screens/Welcome';

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
