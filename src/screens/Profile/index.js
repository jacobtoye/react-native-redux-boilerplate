import React from 'react';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Theme from 'constants/theme';

export const ProfileScreen = () => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.PRIMARY,
      paddingTop: 72,
    }}
  >
    <DisplayText>It's all about you...</DisplayText>
  </ContainerView>
);

export default ProfileScreen;
