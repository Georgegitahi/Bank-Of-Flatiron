import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

//ReactDOM.render(<App />, document.getElementById("root"));

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);
