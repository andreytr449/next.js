import { MoviesModule } from "@/app/modules/movies";

export const revalidate = 3600;

export default async function Home() {
  return <MoviesModule />;
}
