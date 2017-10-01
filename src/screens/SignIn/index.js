import React from 'react';

import {
  Button,
  ContainerView,
} from 'components';
import * as Theme from 'constants/theme';

export const SignInScreen = props => (
  <ContainerView containerStyle={{ justifyContent: 'center' }}>
    <Button
      text="Sign in"
      containerStyle={{
        marginLeft: Theme.Grid.COLUMN * 2,
        marginRight: Theme.Grid.COLUMN * 2,
      }}
      onPress={() => { props.login({ username: '', password: '' }); }}
    />
  </ContainerView>
);

export default SignInScreen;
