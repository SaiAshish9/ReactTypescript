import React from 'react'
import {  IEpisode } from "./interfaces";

const EpisodeList = (props:any):Array<JSX.Element> => {

    const  {episodes,toggleFavAction,favourites,store}=props

   const {state,dispatch}=store

    return  episodes.map((i: IEpisode) => (
          <section className="episode-box" key={i.id}>
            <img src={i.image.medium} alt={"Rick and Mort ${i.name}"} />
            <div>{i.name}</div>
            <section style={{ display:"flex",justifyContent:"space-between" }}>
              <div>
                Season : {i.season} Number : {i.number}
              </div>
              <button onClick={() => toggleFavAction(state,dispatch,i)} type="button">
                {favourites.find((x: IEpisode) => x.id === i.id)
                  ? "UnFav"
                  : "Fav"}
              </button>
            </section>
          </section>
        ))
}

export default EpisodeList
