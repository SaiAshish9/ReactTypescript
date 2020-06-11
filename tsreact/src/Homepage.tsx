import React, { lazy, Suspense, Fragment, useContext, useEffect } from "react";
import {  IEpisodeProps } from "./interfaces";
import { Store } from "./store";
import {fetchDataAction,toggleFavAction} from "./Actions"


const EpisodeList = lazy<any>(() => import("./EpisodeList"));

const Homepage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  
  const props: IEpisodeProps = {
    episodes: state.episodes,
    store:{state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
};

export default Homepage;
