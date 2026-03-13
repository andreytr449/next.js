import { getMovieById } from "@/app/entities/api/movies/movies.api";
import { MovieModule } from "@/app/modules/movie";
import NotFoundMoviePage from "../not-found";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { results, success } = await getMovieById(id);

  if (!results || !success) return <NotFoundMoviePage />;

  return <MovieModule {...results} />;
}
