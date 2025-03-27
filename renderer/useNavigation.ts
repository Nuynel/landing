import {useTranslation} from "react-i18next";
import {usePageContext} from "./usePageContext";
import extractLocaleFromUrl from "../src/shared/helpers/extractLocaleFromUrl";


type Props = {locale?: string, href?: string}

const useNavigation = () => {
  const { i18n } = useTranslation();
  const pageContext = usePageContext()
  const { pathnameWithoutLocale } = extractLocaleFromUrl(pageContext.urlParsed);

  const getHref = (props: Props) => {
    const locale = props.locale || pageContext.locale
    const relativePath = props.href  || pathnameWithoutLocale

    return (Array.isArray(i18n.options.fallbackLng) &&
      locale === i18n.options.fallbackLng[0])
      ? relativePath
      : `/${locale}${relativePath}`
  }

  return {
    getHref
  }
}

export default useNavigation;
