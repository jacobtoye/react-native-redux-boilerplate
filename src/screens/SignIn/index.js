import React, { Component } from 'react';

import {
  Button,
  ContainerView,
} from 'components';
import * as Theme from 'constants/theme';

export class SignInScreen extends Component {
  render() {
    return (
      <ContainerView containerStyle={{
        justifyContent: 'center',
      }}>
        <Button
          text="Sign in"
          containerStyle={{
            marginLeft: Theme.Grid.COLUMN * 2,
            marginRight: Theme.Grid.COLUMN * 2,
          }}
          onPress={() => {this.props.navigation.navigate('Welcome')}}
        />
      </ContainerView>
    );
  }
}

export default SignInScreen;
