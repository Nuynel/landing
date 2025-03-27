import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  'en': {
    translation: translationEN,
  },
  'de': {
    translation: translationRU,
  },
};

export const initializeI18n = (lng: string) => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng,
      fallbackLng: 'en',
      supportedLngs: ['en', 'de'],
      interpolation: {
        escapeValue: false,
      },
    });

  return i18n;
};
