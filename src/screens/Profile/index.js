import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Routes from 'constants/routes';
import * as Theme from 'constants/theme';

export const ProfileScreen = ({ signOut, navigation }) => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.ACCENT,
      paddingTop: 72,
    }}
  >
    <TouchableOpacity onPress={() => { navigation.navigate(Routes.MODAL_NAV_ROUTE); }}>
      <DisplayText>Wanna see a modal? Tappity tap.</DisplayText>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { navigation.goBack(null); }}>
      <DisplayText>Or you can go back.</DisplayText>
    </TouchableOpacity>
    <TouchableOpacity onPress={signOut}>
      <DisplayText>Tap to sign out.</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default ProfileScreen;
