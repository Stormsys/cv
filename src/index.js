import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-65034272-2');
ReactGA.pageview(window.location.pathname + window.location.search);



 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<React.StrictMode>
    <App />
  </React.StrictMode>, rootElement);
} else {
  render(<React.StrictMode>
    <App />
  </React.StrictMode>, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
