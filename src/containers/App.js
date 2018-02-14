import React from 'react';
import { StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { AppLoading } from 'expo';

import rootSaga from 'sagas';
import ReduxAppNavigator from './ReduxAppNavigator';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

// TODO: add in redux-persist

class App extends React.Component {
  constructor(props) {
    super(props);

    StatusBar.setHidden(true);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <appLoading />
      );
    }

    return (
      <Provider store={store}>
        <ReduxAppNavigator />
      </Provider>
    );
  }
}

export default App;
