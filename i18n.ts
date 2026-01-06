import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import * as Yup from 'yup';
import i18n from "i18next";
 
// Can be imported from a shared config
const locales = ['ar', 'en'];
 
export default getRequestConfig(async ({locale}) => {
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
