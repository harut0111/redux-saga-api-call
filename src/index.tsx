import React from "react";
import ReactDOM from "react-dom";
import "../src/style/index.scss";
import Main from "./components/Main";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
