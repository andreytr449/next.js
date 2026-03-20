import { QueryProvider } from "@/pkg/query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
