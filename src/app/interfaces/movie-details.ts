export interface Movie {
  flag: boolean;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: Belongs_to_collection;
  budget: number;
  genres?: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: Production_countries[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages?: Spoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Belongs_to_collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface Genres {
  id: number;
  name: string;
}
interface Production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface Production_countries {
  iso_3166_1: string;
  name: string;
}
interface Spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
