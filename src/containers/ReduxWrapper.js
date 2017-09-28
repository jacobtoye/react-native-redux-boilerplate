import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { AppLoading } from 'expo';

import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

// TODO: user redux-saga
// sagaMiddleware.run(rootSaga);

// TODO: add in redux-persist

class ReduxWrapper extends React.Component {
  constructor(props) {
    super(props);

    StatusBar.setHidden(true);
  }

  state = {
    appIsReady: false,
  };

  componentDidMount() {
    this.setState({ appIsReady: true });
  }

  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />;
    }

    // TODO: remove the View
    return (
      <Provider store={store}>
        <View>
          <Text>Woot got me some react-native with the redux!</Text>
        </View>
      </Provider>
    );
  }
}

export default ReduxWrapper;
