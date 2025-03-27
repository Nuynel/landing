import {useState} from 'react';
import {useTranslation} from "react-i18next";
import Logo from '../../shared/svg/logo.svg'
import MenuIcon from '../../shared/svg/icons/menu.svg'
import {MobileMenu} from "./ui/MobileMenu";
import {LaunchButton} from "./ui/LaunchButton";
import {LanguageSwitcher} from "../../features/i18n/LanguageSwitcher";
import {Link} from "../../../renderer/Link";
import {ThemeController} from "../../features/themeController/ThemeController";
import {usePageContext} from "../../../renderer/usePageContext";
import extractLocaleFromUrl from "../../shared/helpers/extractLocaleFromUrl";
import LINKS from "../../shared/const/links";

const LINKS_LEFT = [LINKS.PRODUCTS, LINKS.COMMUNITY]
// const LINKS_RIGHT = [LINKS.ABOUT_US, LINKS.SUPPORT]
const LINKS_RIGHT = [LINKS.SUPPORT]

const DesktopHeader = () => {
  const {urlParsed} = usePageContext()
  const { pathnameWithoutLocale } = extractLocaleFromUrl(urlParsed);

  const { t } = useTranslation();

  const linksHandler = (condition: boolean, link: string) => condition ? (
    <Link href={link} key={link} className='hover:scale-110 transition-all duration-300'>
      {t('buttonsAndLinks' + link.replace('/', '.'))}
    </Link>
  ) : null

  const LeftLinks = () => (
    <div className='flex lg:gap-6 items-center'>
      {LINKS_LEFT.map((link) => linksHandler(pathnameWithoutLocale !== LINKS.HERO && pathnameWithoutLocale !== link, link))}
    </div>
  )

  const RightLinks = () => (
    <div className='flex gap-6 items-center'>
      {LINKS_RIGHT.map((link) => linksHandler(pathnameWithoutLocale !== link, link))}
    </div>
  )

  return (
    <div className="items-center justify-between hidden lg:flex lg:px-20 mt-6 xl:min-w-fit xl:w-[1440px]">
      <div className="flex-1 flex gap-8 justify-start text-textPrimary items-center">
        <LaunchButton className="rounded-full h-11 bg-[#2D2D2E] text-textPrimary px-5"/>
        <LeftLinks/>
      </div>
      <Link href={LINKS.HERO}>
        <Logo className="w-[75px] h-[92px] fill-textPrimary"/>
      </Link>
      <div className="flex-1 flex text-textPrimary gap-14 justify-end">
        <RightLinks/>
        <div className='flex gap-8 items-center'>
          <LanguageSwitcher className='text-textPrimary border-textPrimary'/>
          <ThemeController/>
        </div>
      </div>
    </div>
  )
}

type MobileHeaderProps = {openMobileMenu: () => void}

const MobileHeader = ({openMobileMenu}: MobileHeaderProps) => (
  <div className="flex items-center justify-between mx-4 md:mx-8 lg:hidden mt-3 md:mt-6">
    <LanguageSwitcher className='text-textPrimary border-textPrimary w-8'/>
    <Link href={LINKS.HERO}>
      <Logo className="w-[75px] h-[92px] fill-textPrimary" />
    </Link>
    <button onClick={openMobileMenu}>
      <MenuIcon className="stroke-textPrimary"/>
    </button>
  </div>
)

export const Header = () => {
  const [ showMobileMenu, toggleMobileMenu ] = useState(false)
  return (
    <header className="xl:flex xl:justify-center xl:w-full">
      <MobileHeader openMobileMenu={() => toggleMobileMenu(true)}/>
      <DesktopHeader />
      {showMobileMenu && <MobileMenu closeMobileMenu={() => toggleMobileMenu(false)}/>}
    </header>
  )
}
