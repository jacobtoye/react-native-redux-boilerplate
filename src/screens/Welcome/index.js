import React, { Component } from 'react';
import { Text } from 'react-native';

import {
  Button,
  ContainerView,
} from '../../components';


export class WelcomeScreen extends Component {
  render() {
    return (
      <ContainerView>
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
      </ContainerView>
    );
  }
}

export default WelcomeScreen;
