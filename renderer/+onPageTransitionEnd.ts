// https://vike.dev/onPageTransitionEnd
import extractLocaleFromUrl from "../src/shared/helpers/extractLocaleFromUrl";

export { onPageTransitionEnd }

import type { OnPageTransitionEndAsync } from 'vike/types'
import LINKS from "../src/shared/const/links";

const FAQ_URLS = [
  LINKS.ABOUT_TAGS,
  LINKS.ARCHETYPES,
  LINKS.USER_GUIDE
];

const PRODUCT_URLS = [
  LINKS.CHAT_ROULETTE,
  LINKS.DASHBOARD,
  LINKS.DIARY,
  LINKS.IDEAL_DATE
]

const areBothStringsInSameArray = (
  [firstUrl, secondUrl]: [string, string], scopes: string[][]
): boolean => scopes.some(scope => scope.includes(firstUrl) && scope.includes(secondUrl));

const onPageTransitionEnd: OnPageTransitionEndAsync = async (): ReturnType<OnPageTransitionEndAsync> => {
  document.querySelector('body')!.classList.remove('page-is-transitioning')

  const previousUrl = sessionStorage.getItem('previousUrl');
  const { pathnameWithoutLocale } = extractLocaleFromUrl({pathname: window.location.pathname});
  if (
    previousUrl &&
    areBothStringsInSameArray([previousUrl, pathnameWithoutLocale], [FAQ_URLS, PRODUCT_URLS])
  ) {
    const savedScrollY = sessionStorage.getItem('window.scrollY')
    requestAnimationFrame(() => {
      if (savedScrollY) window.scrollTo(0, Number(savedScrollY))
    });
  }
}
