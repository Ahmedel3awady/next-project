import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return {
    title: `${t('titles.home')} - ${t('app.namssssssse')}`,
    description: t('app.description'),
  };
}

export default async function BecomeTeacherPage() {
  return (
    <div>
      <h1>Policy Page</h1>
    </div>
  );
}
