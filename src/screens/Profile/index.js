import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Theme from 'constants/theme';

export const ProfileScreen = ({ onPress }) => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.ACCENT,
      paddingTop: 72,
    }}
  >
    <TouchableOpacity onPress={onPress}>
      <DisplayText>Its all about you...</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default ProfileScreen;
