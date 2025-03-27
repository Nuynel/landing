import {useTranslation} from "react-i18next";
import LinkButton from "../../shared/ui/LinkButton";
import LINKS from "../../shared/const/links";

export const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className='flex grow flex-col items-center justify-center h-[calc(100dvh-92px-0.5rem)] md:h-[calc(100dvh-92px-1.5rem)] xl:max-w-screen-xl px-4 text-lg'>
      <p>{t('errors.pageDoesntExist')}</p>
      <LinkButton text={t('buttonsAndLinks.goToMain')} href={LINKS.HERO} classNames='px-6 mt-8 text-lg'/>
    </div>
  )
}
