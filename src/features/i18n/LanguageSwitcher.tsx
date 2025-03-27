import { usePageContext } from "../../../renderer/usePageContext";
import { Link } from "../../../renderer/Link";
import clsx from 'clsx'

type Props = { className?: string }

export const LanguageSwitcher = ({className}: Props) => {
  const {locale} = usePageContext();

  return (
    <div className={clsx(className, "text-lg py-2.5 border-b flex justify-center")}>
      <Link locale={locale === 'en' ? 'ru' : 'en'}>
        {(locale === 'en' ? 'ru' : 'en').toUpperCase()}
      </Link>
    </div>
  );
}
