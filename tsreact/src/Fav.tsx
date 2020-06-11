import React, { lazy, Suspense, Fragment, useContext, useEffect } from "react";
import { Store } from "./store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = lazy<any>(() => import("./EpisodeList"));

const Fav = (): JSX.Element=> {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps= {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="episode-layout">
          <EpisodeList {...props} />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default Fav;
