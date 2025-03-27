import LogoSVG from '../../shared/svg/logo.svg'
import {Link} from "../../../renderer/Link";
import { useTranslation } from 'react-i18next';
import Terra_footer_image_x2_mob from "../../../public/assets/img/Terra_footer_image_x2_mob.png";
import Terra_footer_image_x2 from "../../../public/assets/img/Terra_footer_image_x2.png";
import Terra_footer_image_x2_mob_dark from "../../../public/assets/img/Terra_footer_image_x2_mob_dark.png";
import Terra_footer_image_x2_dark from "../../../public/assets/img/Terra_footer_image_x2_dark.png";
import Terra_footer_image_x2_dark_de from "../../../public/assets/img/Terra_footer_image_x2_dark_de.png";
import LinkButton from "../../shared/ui/LinkButton";
import clsx from "clsx";
import {AppStores} from "./AppStoreButtons";
import {LegalLinks} from "./LegalLinks";
import LINKS from "../../shared/const/links";
import {usePageContext} from "../../../renderer/usePageContext";

const LogoSection = () => (
  <div className='mb-10 mt-3 lg:flex-[1_1_calc(25%-16px)] lg:max-w-[calc(25%-16px)] xl:flex-[1_1_calc(25%-16px)] xl:max-w-[calc(25%-16px)] xl:min-h-60 xl:mb-0 lg:self-start'>
    <Link href={LINKS.HERO} className="fill-accent dark:fill-textPrimary">
      <LogoSVG className="h-full w-32 lg:w-32 xl:w-52"/>
    </Link>
  </div>
)


const MainSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center lg:order-2 lg:flex-[1_1_calc(40%-16px)] lg:max-w-[calc(40%-16px)] xl:flex-[1_1_calc(50%-16px)] xl:max-w-[calc(50%-16px)]">
      <div className="text-center tracking-wide text-2xl md:text-2xl xl:text-4xl mb-3">{t('footer.getTheApp')}</div>
      <p className="mb-4 md:mb-8 lg:mb-10 text-center text-lg sm:text-2lg lg:text-lg xl:text-xl xl:tracking-tight">{t('footer.slogan')}</p>
      <AppStores />
    </div>
  )
}

const InfoLinks = () => {
  const { t } = useTranslation();
  const wrapperSizes = 'max-w-[100vw] lg:flex-[1_1_calc(25%-16px)] lg:max-w-[calc(25%-16px)] xl:flex-[1_1_calc(25%-16px)] xl:max-w-[calc(25%-16px)]'
  const contentAlign = 'flex flex-col items-center sm:flex-row lg:flex-col lg:items-end'
  const wrapperSpaces = 'px-4 lg:px-0 gap-x-2 gap-y-4 mb-8 md:mb-12 xl:mb-0 xl:gap-4'
  return (
    <div className={clsx('flex lg:order-3 lg:justify-end lg:self-start', wrapperSizes)}>
      <div className={clsx(contentAlign, wrapperSpaces, 'max-w-full')}>
        <LinkButton text='FAQ' href={LINKS.ABOUT_TAGS} primary classNames='grow min-w-full sm:shrink sm:min-w-min w-52 sm:w-48 lg:w-44 xl:w-full px-4 sm:px-6 text-lg'/>
        <LinkButton text={t('buttonsAndLinks.safetyTips')} href={LINKS.SAFETY_TIPS} primary classNames='grow w-40 w-52 sm:w-48 lg:w-44 xl:w-full px-4 sm:px-6 text-lg'/>
      </div>
    </div>
  )
}

type FooterImageProps = {smallImg: string, img: string, className: string}

const FooterImage = ({smallImg, img, className}: FooterImageProps) => {
  const baseClasses = 'max-w-[calc(100vw-4rem)] sm:max-w-screen-xs md:max-w-screen-sm xl:w-[640px] lg:flex-[1_1_calc(40%-16px)] lg:max-w-[calc(40%-16px)] xl:flex-[1_1_40%] xl:max-w-[40%] lg:order-5 lg:self-end'
  return (
    <picture className={clsx(baseClasses, className)}>
      <source srcSet={smallImg} media="(max-width: 1023px)" />
      <source srcSet={img} media="(min-width: 1024px)" />
      <img src={smallImg} alt="FooterImg" loading='lazy' className=""/>
    </picture>
  )
}

const FooterMeta = () => {
  const year = (new Date()).getFullYear()
  const sizes = 'w-screen lg:flex-[1_1_calc(25%-16px)] lg:max-w-[calc(25%-16px)] xl:flex-[1_1_calc(30%-2rem)] xl:max-w-[calc(30%-2rem)]'
  const layout = 'flex justify-center items-center lg:justify-end'
  const colors = 'bg-accent dark:bg-bg-dark lg:bg-bg-light text-textPrimary dark:text-textPrimary lg:text-accent'
  const border = 'dark:border-t dark:lg:border-none'
  const spaces = 'pt-6 pb-8 lg:py-0 lg:mb-10 xl:mb-16'
  return (
    <div className={clsx('lg:order-6 lg:self-end', sizes, layout, colors, border, spaces)}>
      <div className="flex flex-col min-h-min gap-5">
        <div>{year} © Terra Incognita</div>
        <div>Code and Design: Softocean GmbH</div>
      </div>
    </div>
  )
}

export const Footer = () => {
  const {locale} = usePageContext()
  return (
    <footer className="w-full flex justify-center bg-bg-light dark:bg-bg-dark">
      <div className='dark:text-textPrimary h-full flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-between pt-5 lg:px-20 lg:pt-10 xl:pt-15 lg:max-w-full xl:max-w-screen-xl'>
        <LogoSection/>
        <InfoLinks/>
        <LegalLinks/>
        <MainSection/>
        <FooterImage
          smallImg={Terra_footer_image_x2_mob}
          img={Terra_footer_image_x2}
          className="dark:hidden"
        />
        <FooterImage
          smallImg={Terra_footer_image_x2_mob_dark}
          img={locale === 'en' ? Terra_footer_image_x2_dark : Terra_footer_image_x2_dark_de}
          className="hidden dark:inline-block"
        />
        <FooterMeta />
      </div>
    </footer>
  )
}
