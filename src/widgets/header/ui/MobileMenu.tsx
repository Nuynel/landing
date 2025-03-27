import {useTranslation} from "react-i18next";
import clsx from "clsx";
import Logo from "../../../shared/svg/logo.svg";
import XMarkIcon from '../../../shared/svg/icons/x-mark.svg'
import {LanguageSwitcher} from "../../../features/i18n/LanguageSwitcher";
import {LaunchButton} from "./LaunchButton";
import ArrowUpRightIcon from '../../../shared/svg/icons/arrow-up-right.svg'
import {ThemeController} from "../../../features/themeController/ThemeController";
import {usePageContext} from "../../../../renderer/usePageContext";
import {Link} from "../../../../renderer/Link";
import extractLocaleFromUrl from "../../../shared/helpers/extractLocaleFromUrl";
import LINKS from "../../../shared/const/links";

const HEADER_LINKS = [LINKS.PRODUCTS, LINKS.COMMUNITY, LINKS.SUPPORT]
// const HEADER_LINKS = [LINKS.PRODUCTS, LINKS.COMMUNITY, LINKS.ABOUT_US, LINKS.SUPPORT]

type Props = { closeMobileMenu: () => void }

export const MobileMenu = ({closeMobileMenu}: Props) => {
  const {urlParsed} = usePageContext();
  const { pathnameWithoutLocale } = extractLocaleFromUrl(urlParsed);
  const { t } = useTranslation();

  return (
    <nav
      aria-label="Main Mobile Navigation"
      id="mobileMenu"
      className='z-20 flex flex-col items-center justify-center fixed min-h-screen w-screen bg-bg-light dark:bg-accent top-0 lg:hidden animate-fadeIn'
    >
      <div className="absolute top-3 md:top-6 flex items-center justify-between w-full px-4 md:px-8">
        <LanguageSwitcher className='text-accent dark:text-textPrimary border-accent dark:border-textPrimary w-8'/>
        <Link href={LINKS.HERO}>
          <Logo className="w-[75px] fill-accent dark:fill-textPrimary" />
        </Link>
        <button className="" onClick={closeMobileMenu}>
          <XMarkIcon className="stroke-accent dark:stroke-textPrimary"/>
        </button>
      </div>

      <div className='sm:grow-[2.5] h-1'/>

      <div className='sm:grow-[2] flex flex-col justify-between'>
        <div className='flex flex-col gap-3 items-center mb-12 sm:mb-0'>
          {HEADER_LINKS.map((link) => (
            <Link
              href={link}
              key={link}
              className={clsx("h-11 flex stroke-accent dark:stroke-textPrimary text-accent dark:text-textPrimary items-center gap-2", link === pathnameWithoutLocale ? 'text-xl' : 'text-lg hover:scale-110 transition-all duration-300')}
            >
              {t('buttonsAndLinks' + link.replace('/', '.'))}
              <ArrowUpRightIcon className={clsx(link === pathnameWithoutLocale && 'transform scale-y-[-1]')}/>
            </Link>
          ))}
        </div>

        <div className='flex flex-col items-center gap-4 text-accent text-base dark:text-textPrimary'>
          {t('buttonsAndLinks.darkTheme')}
          <ThemeController/>
        </div>
      </div>

      <div className='sm:grow-[1.8] h-1'/>

      <div className="absolute bottom-10 w-full px-4">
        <LaunchButton className="rounded-full h-14 w-full bg-[#2D2D2E] dark:bg-bg-light text-textPrimary dark:text-accent"/>
      </div>
    </nav>
  )
}
