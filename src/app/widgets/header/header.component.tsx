import { Logo } from "@/app/shared/assets";
import { Link } from "@/i18n/routing";
import { navigationData } from "./header.constant";
import { getTranslations } from "next-intl/server";

export const Header = async () => {
  const t = await getTranslations("Header");
  return (
    <header className="rounded-4xl mx-28 sticky top-0 z-50 border border-b-gray-900 backdrop-blur-md bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          <Link href="/">
            <Logo className="text-foreground gap-3" />
          </Link>
          {navigationData.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="hover:text-primary max-md:hidden"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link className="bg-foreground px-2 rounded-2xl" href="/sign-up">
            <span className="text-background font-medium text-xs">
              {t("button")}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
