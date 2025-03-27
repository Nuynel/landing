import {Url} from "vike/types";

export default function (url: Url | { pathname: string }): {locale: 'ru' | 'en', pathnameWithoutLocale: string} {
  const { pathname } = url
  const supportedLocales = ['ru', 'en'];

  const pathnameParts = pathname.split('/').filter(Boolean);
  let locale: 'en' | 'ru' | '' = '';
  let pathnameWithoutLocale = pathname;

  if (pathnameParts.length > 0 && supportedLocales.includes(pathnameParts[0])) {
    locale = pathnameParts[0] as 'ru' | '';
    pathnameWithoutLocale = `/${pathnameParts.slice(1).join('/')}`;
  }

  locale = locale || 'en';

  return { locale, pathnameWithoutLocale }
}
