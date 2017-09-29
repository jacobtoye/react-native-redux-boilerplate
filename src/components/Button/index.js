import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export const Button = props => (
  <TouchableOpacity
    style={[
      styles.container,
      { backgroundColor: props.containerColor },
      props.containerStyle,
    ]}
    onPress={props.onPress}
  >
    <Text style={[styles.text, { color: props.textColor }, props.textStyle]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.any,
  textStyle: PropTypes.any,
  containerColor: PropTypes.any,
  textColor: PropTypes.any,
};

Button.defaultProps = {
  text: 'Button',
  onPress: () => 'Button pressed!',
  containerStyle: {},
  textStyle: {},
  containerColor: '#ff69b4',
  textColor: 'white',
};
