import i18n from "i18next";
import * as Yup from 'yup';
import * as en from './en.json';
import * as ar from './ar.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const;

// Check if window is defined before accessing localStorage
const defaultLanguage = typeof window !== 'undefined' ? localStorage.getItem('lang') || 'en' : 'en';

export default i18n
  .init({
    resources,
    lng: "defaultLanguage",
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });

// Update language and direction on the client side
if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.language;
  document.documentElement.dir = i18n.dir(i18n.language);
}

Yup.setLocale({
  mixed: {
    required: i18n.t('validations.required'),
  },
  string: {
    email: i18n.t('validations.email'),
    min: i18n.t('validations.min'),
  },
});
