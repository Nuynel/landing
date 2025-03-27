import {useTranslation} from "react-i18next";
import {usePopup} from "../../layouts/usePopupContext";

export const LaunchButton = ({className}: {className: string}) => {
  const { t } = useTranslation();
  const { togglePopup } = usePopup();

  return (
    <button
      className={className}
      onClick={togglePopup}
    >
      <div className='h-full w-full hover:scale-110 transition-all duration-300 flex justify-center items-center'>
        {t('buttonsAndLinks.launchApp')}
      </div>
    </button>
  )
}
