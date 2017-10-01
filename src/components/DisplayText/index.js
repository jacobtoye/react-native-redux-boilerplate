import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export const DisplayText = props => (
  <Text style={[styles.text, props.textStyle]}>
    {props.children}
  </Text>
);

export default DisplayText;
