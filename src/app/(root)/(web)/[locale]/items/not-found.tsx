import { Link } from "@/pkg/locale";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFoundMovie");

  return (
    <div className="min-h-dvh bg-[#0d0d0d] flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-404 select-none">404</p>

        <div className="flex items-center gap-3.5 w-full max-w-sm mt-5 mb-6">
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="font-mono-dm text-[9px] tracking-[0.22em] uppercase text-white/20">
            {t("label")}
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        <p className="font-mono-dm text-[13px] italic leading-[1.75] text-white/25 max-w-xs mb-9">
          {t("description")}
        </p>

        <Link
          href="/items"
          className="font-mono-dm text-[11px] tracking-[0.15em] uppercase border border-white/15 text-white/45 px-7 py-2.5 rounded-sm hover:border-white/35 hover:text-white/85 transition-colors"
        >
          {t("back")}
        </Link>
      </div>
    </div>
  );
}
