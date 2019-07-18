import { Provider } from "react-redux";
import React, { Component } from "react";
import { PersistGate } from "redux-persist/lib/integration/react";
import AppContainer from "./routers/MainStackRouter";
import configureStore from "./store/configureStore";

//Debbuging XHR REQUEST network
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

class AppWithNavigation extends Component {
  render() {
    return (
      <PersistGate loading={null} persistor={this.props.persistor}>
        <AppContainer />
      </PersistGate>
    );
  }
}

class unitedRemoteChallenge extends Component {
  constructor() {
    super();
    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <AppWithNavigation persistor={this.state.persistor} />
      </Provider>
    );
  }
}
export default unitedRemoteChallenge;
