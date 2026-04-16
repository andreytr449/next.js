export interface IMovieBodyProps {
  overview: string
  status: string
  vote_average: number
  release_date: string
  popularity: number
  runtime: string
  original_language: string
  vote_count: number
  imdb_id: string
  production_companies: { name: string; origin_country: string }[]
}
