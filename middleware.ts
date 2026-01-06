import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  // Match all pathnames except for:
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /images, /icons, etc (static files)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
