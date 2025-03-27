import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import {Overlay} from "../../shared/ui/Overlay";
import XMarkIcon from "../../shared/svg/icons/x-mark.svg";
import clsx from "clsx";
import {useGAContext} from "../../widgets/layouts/useGA";

type ConsentPopupProps = {
  closePopup: () => void
}

type StoredStatuses = "accept" | "decline"

const PrivacySettingsPopup: React.FC<ConsentPopupProps> = ({closePopup}: ConsentPopupProps) => {
  const [consentStatus, setConsentStatus] = useState<StoredStatuses>("decline");
  const { t } = useTranslation();
  const {toggleIsConsentGiven} = useGAContext()

  useEffect(() => {
    const storedStatus = localStorage.getItem("userConsentStatus");
    if (storedStatus) setConsentStatus(storedStatus as StoredStatuses);
  }, []);

  const handleToggle = () => {
    const newStatus = consentStatus === 'accept' ? 'decline' : 'accept'
    localStorage.setItem("userConsentStatus", newStatus);
    localStorage.setItem("userConsentData", new Date().toISOString());
    setConsentStatus(newStatus);
    toggleIsConsentGiven(newStatus === 'accept')

    if (newStatus === 'decline') {
      document.cookie = "userConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  return (
    <Overlay onClick={closePopup}>
      <div
        className="flex flex-col relative bg-bg-light rounded-3xl p-6 md:w-[50vw] lg:w-[20rem] mx-9 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closePopup} className='absolute top-6 right-6'>
          <XMarkIcon className='stroke-accent'/>
        </button>

        <div className="text-xl w-full text-start text-accent font-bold mb-4">{t('privacySettings.title')}</div>
        <div className="flex items-center mb-4 gap-4">
          <label htmlFor="consent-toggle" className="text-gray-700">
            {t('privacySettings.consentLabel')}
          </label>
          <button
            onClick={handleToggle}
            className='flex w-11 h-6 p-1 rounded-full border border-accent'
          >
            <div className={clsx(
              'size-4 bg-accent rounded-full transition-all duration-300',
              consentStatus === 'accept' && 'opacity-100 translate-x-4',
              consentStatus === 'decline' && 'opacity-80',
            )} />
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default PrivacySettingsPopup;
