import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Routes from 'constants/routes';
import * as Theme from 'constants/theme';

export const Modal1 = ({ navigation }) => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.PRIMARY,
      paddingTop: 72,
    }}
  >
    <TouchableOpacity onPress={() => { navigation.navigate(Routes.MODAL2_ROUTE); }}>
      <DisplayText>This modal has another screen, tap to go there.</DisplayText>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { navigation.goBack(null); }}>
      <DisplayText>Or you can close.</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default Modal1;
