import NotFoundPage from "@/app/(root)/not-found";
import { getMovieById } from "@/app/entities/api/movies/movies.api";
import { MovieModule } from "@/app/modules/movie";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { results } = await getMovieById(id);

  if (!results) return <NotFoundPage />;

  return <MovieModule {...results} />;
}
