import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./movies.api";

export const useMoviesQuery = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};
