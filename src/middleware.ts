import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { locales } from "./constants/locale";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(${locales.join("|")})/:path*`],
};
