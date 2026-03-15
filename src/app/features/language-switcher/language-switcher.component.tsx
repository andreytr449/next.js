"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/app/shared/ui";
import { LOCALES } from "./language-switcher.constant";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

type Props = {
  trigger: ReactNode;
  defaultOpen?: boolean;
  align?: "start" | "center" | "end";
};

export const LanguageDropdown = ({ defaultOpen, align, trigger }: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState(locale);

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLanguage(newLocale);
  };

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger suppressHydrationWarning asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align={align || "end"}>
        <DropdownMenuRadioGroup value={language} onValueChange={handleChange}>
          {Object.entries(LOCALES).map(([locale, label]) => (
            <DropdownMenuRadioItem
              key={locale}
              value={locale}
              className="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden"
            >
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
