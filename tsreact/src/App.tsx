import React, { Fragment, useContext, useEffect } from "react";

import { Store } from "./store";
import { IAction, IEpisode } from "./interfaces";

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };

    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (x: any) => x.id !== episode.id
      );

      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };

  // console.log(state)

  return (
    <Fragment>
      <div>
        <header className="header">
          <h1>Rick and Morty</h1>
          <h1> Typescript Implementation </h1>
        </header>
        <div style={{ display: "flex",width:"80vw",alignItems:"center",justifyContent:"space-between" }}>
          <div>
            <p>Pick your favorite episode 🤔</p>
          </div>
          <div>Favourites(s):{state.favourites.length}</div>
        </div>
      </div>

      <section className="episode-layout">
        {state.episodes.map((i: IEpisode) => (
          <section className="episode-box" key={i.id}>
            <img src={i.image.medium} alt={"Rick and Mort ${i.name}"} />
            <div>{i.name}</div>
            <section>
              <div>
                Season : {i.season} Number : {i.number}
              </div>
              <button onClick={() => toggleFavAction(i)} type="button">
                {state.favourites.find((x: IEpisode) => x.id === i.id)
                  ? "UnFav"
                  : "Fav"}
              </button>
            </section>
          </section>
        ))}
      </section>
    </Fragment>
  );
};

export default App;
