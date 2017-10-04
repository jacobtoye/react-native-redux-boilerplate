import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Theme from 'constants/theme';

export const WelcomeScreen = ({ onPress }) => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.ACCENT,
      paddingTop: 72,
    }}
  >
    <TouchableOpacity onPress={onPress}>
      <DisplayText>Tap me to go to Profile!</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default WelcomeScreen;
