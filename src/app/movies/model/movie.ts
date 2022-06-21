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
