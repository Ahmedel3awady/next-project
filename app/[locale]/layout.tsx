import { ReactNode, useEffect } from "react";
import "../globals.css";
import "../globals";
import NavBar from "@/components/NavBar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Footer from "@/components/Footer";

// import AOS from 'aos';

// import aos styles
/* ✅ generateMetadata */
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: `${t("titles.home")} - ${t("app.name")}`,
    description: t("app.description"),
  };
}
interface IProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = useMessages();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReactQueryProvider>
            <NavBar />
            {children}
            <Footer />
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
