import { Link } from "@/i18n/routing";
import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  return (
    <Link
      href="/items"
      className="fixed z-30 top-24 left-10 rounded-full p-3 backdrop-blur-2xl bg-background/50 group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
    >
      <ChevronLeft color="#fff" size={15} />
    </Link>
  );
};
