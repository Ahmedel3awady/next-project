import { getTranslations } from 'next-intl/server';
import { ReactNode, useEffect } from "react";

import Link from 'next/link';
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: `${t("titles.home")} - ${t("app.namssssssse")}`,
    description: t("app.description"),
  };
}
interface IProps {
  children: ReactNode;
  params: { locale: string };
}
export default async function BecomeTeacherPage({ children, params: { locale } }: IProps) {

  return (
    <div>
      {locale}
      <h1>Policy Page</h1>
      <Link href={`/${locale}`}>Home</Link>
    </div>
  )
}
