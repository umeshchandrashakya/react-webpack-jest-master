import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import { DefaultTypelessProvider } from "typeless";

ReactDOM.render(
  <DefaultTypelessProvider>
    <App color="Blue" />
  </DefaultTypelessProvider>,
  document.getElementById("root")
);
