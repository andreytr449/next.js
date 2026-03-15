"use server";

import { serverEnv } from "@/config/env";
import { getLocale } from "next-intl/server";
import { MoviesResponse } from "@/app/entities/models";

const localeToLanguage: Record<string, string> = {
  en: "en-US",
  de: "de-DE",
};

export const getMovies = async (): Promise<MoviesResponse> => {
  const { TMDB_API_KEY } = serverEnv;
  const locale = await getLocale();
  const language = localeToLanguage[locale] ?? "en-US";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=${language}&page=1&api_key=${TMDB_API_KEY}&include_adult=false`,
  );

  return await res.json();
};
