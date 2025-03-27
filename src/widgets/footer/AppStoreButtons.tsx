import {usePageContext} from "../../../renderer/usePageContext";
import {QRCodeSVG} from 'qrcode.react';
import clsx from "clsx";
import GP_Icon from "../../shared/svg/icons/lg_google-play-fill.svg";
import AS_Icon from "../../shared/svg/icons/lg_app-store-fill.svg";
// import {Link} from "../../../renderer/Link";
import { useTranslation } from 'react-i18next';
import {usePopup} from "../layouts/usePopupContext";

type StoreButtonProps = {href: string, children: React.ReactNode, className: string}

const StoreButton = ({children, className}: StoreButtonProps) => {
  const colors = 'dark:text-accent bg-textPrimary dark:bg-lightGrey'
  const sizes = 'size-28 sm:size-30 md:size-36 lg:size-32 xl:size-[8.75rem]'
  const { togglePopup } = usePopup();
// return (
  //   <Link
  //     href={href}
  //     target="_blank"
  //     rel="noopener noreferrer"
  //     className={clsx(className, colors, sizes, 'gap-1 rounded-2xl xl:rounded-3xl')}
  //   >
  //     {children}
  //   </Link>
  // )
  return (
    <button
      onClick={togglePopup}
      className={clsx(className, colors, sizes, 'gap-1 rounded-2xl xl:rounded-3xl text-start')}
    >
      {children}
    </button>
  )
}

export const AppStores = () => {
  const animations = 'hover:opacity-80 hover:scale-110 transition-all duration-300'
  const appStoreBtnLayout = 'flex flex-col justify-end relative'
  const { locale } = usePageContext()
  const { t } = useTranslation()
  return (
    <div className="relative flex mb-10 gap-3 md:gap-5">
      <StoreButton href='http://localhost:3000/redirect.html' className="flex justify-around items-center p-3">
        <QRCodeSVG
          value="http://localhost:3000/redirect.html"
          bgColor="transparent"
          fgColor="inherit"
          className="fill-bg-dark size-24 md:size-32 lg:size-24 xl:size-28"
        />
        <div className='absolute top-0 left-0 rounded-2xl xl:rounded-3xl backdrop-blur-sm size-28 sm:size-30 md:size-36 lg:size-32 xl:size-[8.75rem]'/>
      </StoreButton>

      <StoreButton
        href="/faq"
        className={clsx(animations, appStoreBtnLayout, 'p-3 lg:py-4')}
      >
        <GP_Icon className="absolute top-3 right-3 size-6 xl:w-11 xl:h-11"/>
        <span className={clsx('text-sm sm:text-base')}>{t('buttonsAndLinks.getOnGooglePlay')}</span>
      </StoreButton>

      <StoreButton
        href="/faq"
        className={clsx(animations, appStoreBtnLayout, 'p-3 lg:py-4')}
      >
        <AS_Icon className="absolute top-3 right-3 size-6 xl:w-11 xl:h-11"/>
        <span className={clsx('text-sm sm:text-base', locale === 'de' && 'break-words')}>{t('buttonsAndLinks.downloadOnAppStore')}</span>
      </StoreButton>
    </div>
  )
}
