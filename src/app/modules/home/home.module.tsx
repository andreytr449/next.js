import { Link } from "@/pkg/locale";
import { getTranslations } from "next-intl/server";

export const HomeModule = async () => {
  const t = await getTranslations("Home");
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_75%)]" />

      <div className="relative flex flex-col items-center">
        <span className="flex items-center gap-2 border border-[#222] rounded-full px-3 py-1 text-[12px] text-[#888] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          {t("badge")}
        </span>

        <h1 className="text-5xl font-medium text-[#ededed] leading-tight tracking-tighter max-w-2xl mb-5">
          {t("title")}
          <br />
          <span className="text-[#888]"> {t("subtitle")}</span>
        </h1>

        <p className="text-[#666] text-base max-w-sm leading-relaxed font-light mb-10">
          {t("description")}
        </p>

        <div className="flex gap-3">
          <Link
            href="/items"
            className="bg-[#ededed] text-[#0a0a0a] rounded-md px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </main>
  );
};
