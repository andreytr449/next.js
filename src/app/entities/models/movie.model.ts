import { IRestApiErrorResponse } from '@/app/shared/interfaces'

export interface IMovie {
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

export interface IMoviesResponse {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IMovieResponse {
  success: boolean
  results: IMovie
}

export type TMovieResponse = IMovie | IRestApiErrorResponse
export type TMoviesResponse = IMoviesResponse | IRestApiErrorResponse
