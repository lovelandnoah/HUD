import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "../src";

window.React = React;
window.ReactDOM = ReactDOM;

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(hot(App));
