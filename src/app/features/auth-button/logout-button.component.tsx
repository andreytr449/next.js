"use client";

import { useAuthStore } from "@/app/shared/store";
import { Button } from "@/app/shared/ui";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const AuthButton = () => {
  const { logout, user } = useAuthStore();
  const t = useTranslations("Header");

  if (!user)
    return (
      <Link className="bg-foreground px-2 rounded-2xl" href="/auth/">
        <span className="text-background font-medium text-xs">
          {t("button")}
        </span>
      </Link>
    );

  return (
    <Button onClick={logout} className="text-background font-medium text-xs">
      {t("logout-btn")}
    </Button>
  );
};
