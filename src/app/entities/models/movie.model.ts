export interface Movie {
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
  genre_ids: number[]
  original_language: string
  adult: boolean
  video: boolean

  tagline: string
  backdrop_path: string
  poster: string
  genres: { id: number; name: string }[]
  runtime: string
  status: string
  language: string
  origin: string[]
  imdb_id: string
  production_companies: { name: string; origin_country: string }[]
}

export interface MoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface MovieResponse {
  success: boolean
  results: Movie
}
