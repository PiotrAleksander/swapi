import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import "./index.css";
import App from "./containers/app";
import * as serviceWorker from "./serviceWorker";
import { AppProvider } from "./contexts/appContext";

Sentry.init({
  dsn: "https://808c180d61ef409e8f9bd38d18e3786b@sentry.io/1834910"
});

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
