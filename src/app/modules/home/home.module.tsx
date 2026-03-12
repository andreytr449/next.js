import { Badge } from "@/app/shared/ui";
import { MovieList } from "@/app/widgets/movie-list";
import { getTranslations } from "next-intl/server";

export const HomeModule = async () => {
  const t = await getTranslations("Home");
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

        <MovieList />
      </div>
    </main>
  );
};
