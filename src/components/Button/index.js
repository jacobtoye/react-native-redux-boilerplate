import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export const Button = props => (
  <TouchableOpacity
    style={[
      styles.container,
      props.containerStyle,
    ]}
    onPress={props.onPress}
  >
    <Text style={[styles.text, props.textStyle]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

Button.defaultProps = {
  text: 'Button',
  onPress: () => 'Button pressed!',
  containerStyle: {},
  textStyle: {},
};

export default Button;
