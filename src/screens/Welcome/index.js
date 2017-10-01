import React from 'react';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Theme from 'constants/theme';

export const WelcomeScreen = () => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.ACCENT,
      paddingTop: 72,
    }}
  >
    <DisplayText>Welcome home!</DisplayText>
  </ContainerView>
);

export default WelcomeScreen;
