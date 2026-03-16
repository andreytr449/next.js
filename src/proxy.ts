import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const handleI18n = createMiddleware(routing);
export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const segment = pathname.split("/")[1];

  const isUnknownLocale =
    /^[a-z]{2}$/.test(segment) && !routing.locales.includes(segment as never);

  if (isUnknownLocale) {
    return NextResponse.redirect(new URL("/en", req.url));
  }

  return handleI18n(req);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
