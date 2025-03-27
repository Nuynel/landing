import CookieConsent from "react-cookie-consent";
import {useTranslation} from "react-i18next";
import {Link} from "../../renderer/Link";
import LINKS from "../shared/const/links";
import {useEffect, useState} from "react";
import {useGAContext} from "./layouts/useGA";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(true);

  const {toggleIsConsentGiven} = useGAContext()

  useEffect(() => {
    const consentData = localStorage.getItem("userConsentStatus");
    if (consentData) setShowBanner(false);
  }, []);

  const handleOnClick = (status: "accept" | "decline") => {
    toggleIsConsentGiven(status === "accept");
    localStorage.setItem("userConsentStatus", status);
    localStorage.setItem("userConsentData", new Date().toISOString());
  };

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      disableStyles={true}
      buttonText={t('buttonsAndLinks.accept')}
      declineButtonText={t('buttonsAndLinks.decline')}
      enableDeclineButton
      cookieName="userConsent"
      expires={365}
      containerClasses="fixed bottom-0 z-90 w-screen justify-between left-0 bg-bg-dark dark:bg-bg-light text-textPrimary dark:text-accent p-4 flex flex-col md:flex-row items-center justify-between"
      buttonClasses="bg-success text-textPrimary px-4 py-2 rounded-md hover:scale-105 transition"
      declineButtonClasses="bg-error text-textPrimary px-4 mr-4 py-2 rounded-md hover:scale-105 transition"
      contentClasses="text-sm md:text-base"
      onAccept={() => handleOnClick('accept')}
      onDecline={() => handleOnClick('decline')}
    >
      {t('cookiesBanner')}
      <Link
        href={LINKS.PRIVACY_POLICY}
        target="_blank"
        rel="noopener noreferrer"
        className="underline dark:text-accent hover:underline ml-8"
      >{t('buttonsAndLinks.privacyPolicy')}</Link>
    </CookieConsent>
  );
}
