import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

import reducers from "../reducers/index";

const configureStore = (initialState = {}) => {
  const persistConfig = {
    timeout: 20000,
    key: "primary",
    storage
  };

  const pReducer = persistReducer(persistConfig, reducers);

  return createStore(
    pReducer,
    initialState,
    compose(applyMiddleware(thunk, promise, logger))
  );
};

export default () => {
  const store = configureStore();
  const persistor = persistStore(store);

  return { store, persistor };
};
