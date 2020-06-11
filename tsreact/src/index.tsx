import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./store";
import "./index.css";
import Homepage from "./Homepage";
import Fav from "./Fav";
import { Router, RouteComponentProps } from "@reach/router";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<Homepage />} path="/" />
        <RouterPage pageComponent={<Fav />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
