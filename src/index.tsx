import * as React from "react";
import { render } from "react-dom";
import * as ReactGA from "react-ga";

import { App } from "./components/App";
import "./assets/scss/App.scss";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", (): void => {
    navigator.serviceWorker.register("/service-worker.js").catch();
  });
}

ReactGA.initialize("UA-XXXXXXXX-X");

const rootEl: Element = document.getElementById("root");

render(<App />, rootEl);
