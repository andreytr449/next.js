import { QueryProvider } from "@/pkg";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
