import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Button from '../components/Button';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Button
          text="Sign in"
          containerStyle={{
            borderRadius: 5,
            elevation: 1,
            marginLeft: 60,
            marginRight: 60,
            marginTop: 60,
          }}
          onPress={() => {this.props.navigation.navigate('Home')}}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
