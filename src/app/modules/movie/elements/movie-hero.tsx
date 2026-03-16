import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface IProps {
  backdrop_path: string;
  poster_path: string;
  tagline: string;
  runtime: string;
  original_language: string;
  title: string;
  genres: { id: number; name: string }[];
}
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export async function MovieHero(props: IProps) {
  const t = await getTranslations("MovieHero");

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        width={1920}
        height={1080}
        src={TMDB_IMAGE_BASE + props.backdrop_path}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 blur-sm"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black" />

      <div className="relative z-10 flex items-end h-full px-10 pb-10 gap-8">
        <div className="shrink-0 w-32 h-48 rounded-lg overflow-hidden border border-zinc-700/50 shadow-2xl">
          <Image
            width={1920}
            height={1080}
            src={TMDB_IMAGE_BASE + props.poster_path}
            alt={t("posterAlt")}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-[4px] uppercase text-zinc-500">
            {props.tagline}
          </p>
          <h1 className="text-6xl font-light tracking-tight leading-none">
            {props.title}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {props.genres.map((g, index) => (
              <span
                key={g.id + index}
                className="text-xs tracking-widest uppercase border border-zinc-600 rounded-full px-3 py-1 text-zinc-400"
              >
                {g.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-500 flex-wrap">
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>
              {props.runtime} {t("runtime")}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{props.original_language}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
