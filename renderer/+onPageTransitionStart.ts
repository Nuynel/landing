// https://vike.dev/onPageTransitionStart
import extractLocaleFromUrl from "../src/shared/helpers/extractLocaleFromUrl";

export { onPageTransitionStart }

import type { OnPageTransitionStartAsync } from 'vike/types'

const onPageTransitionStart: OnPageTransitionStartAsync = async (): ReturnType<OnPageTransitionStartAsync> => {
  sessionStorage.setItem('window.scrollY', window.scrollY.toString())
  const { pathnameWithoutLocale } = extractLocaleFromUrl({pathname: window.location.pathname});
  sessionStorage.setItem('previousUrl', pathnameWithoutLocale);
  document.querySelector('body')!.classList.add('page-is-transitioning')
}
