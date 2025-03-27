import {useEffect, useState, StrictMode} from 'react'
import {PageContextProvider} from './usePageContext'
import type { PageContext } from 'vike/types'
import './index.css'
import {I18nextProvider} from "react-i18next";
import {initializeI18n} from "../src/features/i18n";
import {GAProvider} from "../src/widgets/layouts/useGA";

function Layout({ children, pageContext, locale }: { children: React.ReactNode; pageContext: PageContext, locale: string }) {
  const [i18n] = useState(() => initializeI18n(locale)); // Ленивая инициализация

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <I18nextProvider i18n={i18n}>
          <GAProvider>
            {children}
          </GAProvider>
        </I18nextProvider>
      </PageContextProvider>
    </StrictMode>
  )
}

export { Layout }
