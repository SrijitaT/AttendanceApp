import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/rootReducer";
const middeware = applyMiddleware(logger);
const store = createStore(reducer, middeware);
const title = "Attendance App";

ReactDOM.render(
  <Provider store={store}>
    <div>{title}</div>
  </Provider>,
  document.getElementById("app")
);
module.hot.accept();
