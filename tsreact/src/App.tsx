import React, { lazy, Suspense, Fragment, useContext, useEffect } from "react";
import { Store } from "./store";
import { Link } from "@reach/router";

const App = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <h1> Typescript Implementation </h1>
          <p>Pick your favorite episode 🤔</p>
        </div>
        <div>
          <Link to="/" style={{marginRight:20}}>Home</Link>
          <Link to="/faves">Favourites(s):{state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
};

export default App;
