import { HomeModule } from "@/app/modules/home";

export const revalidate = 3600;

export default async function Home() {
  return <HomeModule />;
}
