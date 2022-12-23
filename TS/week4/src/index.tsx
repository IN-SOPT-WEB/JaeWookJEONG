import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "styles/globalStyle";

import App from "./App";

import { worker } from "./mocks/brower";
if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
