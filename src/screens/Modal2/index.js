import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  DisplayText,
} from 'components';
import * as Routes from 'constants/routes';
import * as Theme from 'constants/theme';

export const Modal2 = ({ navigation }) => (
  <ContainerView
    containerStyle={{
      backgroundColor: Theme.Colors.PRIMARY,
      paddingTop: 72,
    }}
  >
    <TouchableOpacity onPress={() => { navigation.goBack(null); }}>
      <DisplayText>You can go back too :)</DisplayText>
    </TouchableOpacity>
  </ContainerView>
);

export default Modal2;
