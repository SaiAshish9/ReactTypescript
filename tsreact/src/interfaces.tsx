export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction;
  favourites: Array<IEpisode>;
}

export interface IEpisode {
  id: number;
  name: string;
  airdate: string;
  airstamp: string;
  airtime: string;
  image: { medium: string; original: string };
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}
