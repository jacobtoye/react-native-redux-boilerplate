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
      <DisplayText>Swipe left to go back. Tap to sign out.</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default ProfileScreen;
