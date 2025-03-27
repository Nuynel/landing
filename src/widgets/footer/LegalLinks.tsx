import { Link } from "../../../renderer/Link";
import { useTranslation } from 'react-i18next';
import clsx from "clsx";
import LINKS from "../../shared/const/links";
import {useState} from "react";
import PrivacySettingsPopup from "../../features/ga/PrivacySettings";

type LegalLinkProps = {text: string, href: string}

const LegalLink = ({text, href}: LegalLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-70 hover:scale-110 transition-all duration-300"
  >{text}</Link>
)

export const LegalLinks = () => {
  const { t } = useTranslation();
  const spaces = 'mb-6 md:mb-10 xl:mb-16 mx-4 lg:mx-0 gap-x-12 sm:gap-x-8 xl:gap-x-7 gap-y-3 md:gap-y-6 lg:gap-y-5'
  const contentAlign = 'flex flex-row flex-wrap justify-center lg:justify-start'
  const blockSizes = 'md:max-w-screen-sm lg:flex-[1_1_calc(25%-16px)] lg:max-w-[calc(25%-16px)] xl:flex-[1_1_calc(30%-2rem)] xl:max-w-[calc(30%-2rem)]'
  const [showPrivacySettings, setShowPrivacySettings] = useState(false)
  return (
    <nav className={clsx('lg:order-4 lg:self-end', spaces, contentAlign, blockSizes)}>
      <LegalLink href={LINKS.TERMS_AND_CONDITIONS} text={t('buttonsAndLinks.termsAndConditions')}/>
      <LegalLink href={LINKS.COOKIES_POLICY} text={t('buttonsAndLinks.cookiePolicy')}/>
      <button
        className={'hover:opacity-70 hover:scale-110 transition-all duration-300'}
        onClick={() => setShowPrivacySettings(true)}
      >{t('buttonsAndLinks.privacySettings')}</button>
      <LegalLink href={LINKS.PRIVACY_POLICY} text={t('buttonsAndLinks.privacyPolicy')}/>
      <LegalLink href={'https://softocean.com/contacts'} text={t('buttonsAndLinks.legalInfo')}/>
      {showPrivacySettings && <PrivacySettingsPopup closePopup={() => setShowPrivacySettings(false)} />}
    </nav>
  )
}
