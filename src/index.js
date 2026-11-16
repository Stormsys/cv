import React from "react";
import "./index.scss";
import App from "./App";
import { hydrate, render } from "react-dom";

// The built page already holds the CV itself (scripts/prerender.js). When the
// visitor opens the CV, the browser adopts that markup. On any other route
// (the feedback page) the markup is for a different page, so it is cleared and
// rendered fresh rather than patched.
const rootElement = document.getElementById("root");
const route = window.location.hash.replace(/^#/, "");
const onCv = route === "" || route === "/";
if (rootElement.hasChildNodes() && onCv) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement,
  );
} else {
  rootElement.textContent = "";
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement,
  );
}
