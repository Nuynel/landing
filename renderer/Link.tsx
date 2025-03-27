import useNavigation from "./useNavigation";

export { Link }

function Link(props: { href?: string; className?: string; locale?: string; children: React.ReactNode, target?: string, rel?: string }) {

  const { getHref } = useNavigation()

  return <a {...props} href={getHref({locale: props.locale, href: props.href})} />
}
