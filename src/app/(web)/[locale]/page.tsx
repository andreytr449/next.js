import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
    </div>
  );
}
