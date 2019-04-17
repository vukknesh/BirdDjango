import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//languages

import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import br from "react-intl/locale-data/br";
import { localeSet } from "./actions/locale";

//add lg
addLocaleData(en);
addLocaleData(br);

if (localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
