import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export const ContainerView = props => (
  <View style={[styles.container, props.containerStyle]}>
    {props.children}
  </View>
);

export default ContainerView;
