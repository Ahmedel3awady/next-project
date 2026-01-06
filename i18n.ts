import i18n from "i18next";
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import * as Yup from 'yup';

// Can be imported from a shared config
const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});


Yup.setLocale({
  mixed: {
    required: i18n.t('validations.required'),
  },
  string: {
    email: i18n.t('validations.email'),
  },
});
