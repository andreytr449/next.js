export interface IMovieHeroProps {
  backdrop_path: string
  poster_path: string
  tagline: string
  runtime: string
  original_language: string
  title: string
  genres: { id: number; name: string }[]
}
