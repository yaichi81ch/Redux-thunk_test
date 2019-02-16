import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import App from "./containers/App";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

store.subscribe(() => {
  console.log(store.getState());
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
