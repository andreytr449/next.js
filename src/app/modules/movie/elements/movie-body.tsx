import { RatingCircle } from "@/app/shared/assets";
import { InfoRow, StatCard } from "@/app/shared/ui";
import { getTranslations } from "next-intl/server";

interface IProps {
  overview: string;
  status: string;
  vote_average: number;
  release_date: string;
  popularity: number;
  runtime: string;
  original_language: string;
  vote_count: number;
  imdb_id: string;
  production_companies: { name: string; origin_country: string }[];
}

export const MovieBody = async ({
  overview,
  status,
  vote_average,
  release_date,
  popularity,
  vote_count,
  original_language,
  runtime,
  imdb_id,
  production_companies,
}: IProps) => {
  const t = await getTranslations("MovieBody");

  return (
    <div className="px-10 py-12 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-xs tracking-[3px] uppercase text-zinc-600 mb-4">
          {t("overview")}
        </p>
        <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">
          {overview}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        <div className="bg-zinc-900 p-5 border border-zinc-800 rounded-xl">
          <p className="text-xs tracking-widest uppercase text-zinc-500 mb-3">
            {t("rating")}
          </p>
          <div className="flex items-center gap-3">
            <RatingCircle score={vote_average} />
            <div>
              <span className="text-2xl font-light">{vote_average}</span>
              <span className="text-zinc-600 text-sm">/10</span>
              <p className="text-xs text-zinc-600 mt-0.5">
                {vote_count} {t("votes")}
              </p>
            </div>
          </div>
        </div>
        <StatCard label="Budget" value="$50M" sub="Production cost" />
        <StatCard label="Revenue" value="$42M" sub="Box office" />
        <StatCard label="Popularity" value={popularity} sub="Trending index" />
      </div>

      <hr className="border-zinc-800/50 mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
        <div>
          <p className="text-xs tracking-[3px] uppercase text-zinc-600 mb-2">
            {t("details")}
          </p>
          <InfoRow label="Release date" value={release_date} />
          <InfoRow label="Runtime" value={runtime} />
          <InfoRow label="Status" value={status} />
          <InfoRow label="Language" value={original_language} />
          <InfoRow
            label="IMDB ID"
            value={
              <span className="font-mono text-xs text-zinc-500">{imdb_id}</span>
            }
          />
        </div>

        <div>
          <p className="text-xs tracking-[3px] uppercase text-zinc-600 mb-2">
            {t("production")}
          </p>
          {production_companies.map((c, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-3 border-b border-zinc-800/60"
            >
              <span className="text-sm text-zinc-300">{c.name}</span>
              <span className="text-xs border border-zinc-700 rounded px-2 py-0.5 text-zinc-500">
                {c.origin_country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
