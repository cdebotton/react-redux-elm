import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import reduxElm from 'redux-elm';

export default (containerDomId) => {
  const storeFactory = compose(
    reduxElm,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  let store;
  return (View, updater) => {
    if (!store) {
      store = storeFactory(updater);
    } else {
      store.replaceReducer(updater);
    }

    const ConnectedView = connect(appState => ({
      model: appState,
    }))(View);

    render((
      <AppContainer>
        <Provider store={store}>
          <ConnectedView />
        </Provider>
      </AppContainer>
    ), document.getElementById(containerDomId));
  };
};
