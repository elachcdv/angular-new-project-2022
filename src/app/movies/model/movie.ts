export interface Movie {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export type MovieResults = {
  results: Movie[];
};

export type MovieDetails = {
  awards: string;
  id: string;
  image: string;
  title: string;
  genres: string;
  plot: string;
  starsList: StarsList[];
};

export type StarsList = {
  name: string;
};
