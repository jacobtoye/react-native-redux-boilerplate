import React from 'react';
import { StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Navigator from './Navigator';

import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

// TODO: user redux-saga
// sagaMiddleware.run(rootSaga);

// TODO: add in redux-persist

class App extends React.Component {
  constructor(props) {
    super(props);

    StatusBar.setHidden(true);
  }

  render() {
    // TODO: we might want to use Expo.AppLoading to make sure we've loaded everything

    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
