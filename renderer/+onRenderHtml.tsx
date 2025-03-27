export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import { Layout } from './Layout'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type {OnRenderHtmlAsync, PageContextServer} from 'vike/types'
import { getPageTitle } from './getPageTitle'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext: PageContextServer): ReturnType<OnRenderHtmlAsync> => {
  const { Page, locale } = pageContext

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined')

  // Alternatively, we can use an HTML stream, see https://vike.dev/streaming
  const pageHtml = ReactDOMServer.renderToString(
    <Layout pageContext={pageContext} locale={locale}>
      <Page />
    </Layout>
  )

  const title = getPageTitle(pageContext)
  const desc = pageContext.data?.description || pageContext.config.description || 'Alisa Kislova CV'

  // <!--        <link rel="icon" href="%PUBLIC_URL%/favicons/favicon.ico" />-->
  // <!--        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> -->
  // В скриптах в body лежит минимизированный "синхронизатор" темы страницы с темой на устройстве пользователя и, если есть, сохраненной темой

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="${locale || 'en'}">
      <head>
        <link rel="icon" href="/assets/favicon/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#d9e3ed">
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <script>!function(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;("dark"===e||(!e&&t))&&document.documentElement.classList.add("dark")}();</script>
      </head>
      <body class="pt-safe-top pb-safe-bottom pl-safe-left pr-safe-right bg-zinc-300 dark:bg-zinc-800">
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  }
}
