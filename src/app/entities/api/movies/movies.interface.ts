import { Movie } from '../../models'

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
