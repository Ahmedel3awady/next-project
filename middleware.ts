import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // locales: ["ar", "en"],
  // defaultLocale: "en",
  // localePrefix: "as-needed",
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
