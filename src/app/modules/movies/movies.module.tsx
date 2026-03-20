import { getMovies } from "@/app/entities/api/movies";
import { Badge } from "@/app/shared/ui";
import { MovieList } from "@/app/widgets/movie-list";
import { getQueryClient } from "@/pkg/query";
import { getTranslations } from "next-intl/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const MoviesModule = async () => {
  const t = await getTranslations("Items");

  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <main className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="space-y-4">
          <Badge variant="outline" className="text-sm">
            {t("tag")}
          </Badge>

          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {t("title")}
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl">
            {t("description")}
          </p>
        </div>
        <HydrationBoundary state={dehydratedState}>
          <MovieList />
        </HydrationBoundary>
      </div>
    </main>
  );
};
