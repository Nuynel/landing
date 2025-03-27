const Footer = () => (
  <footer className="text-center text-sm text-zinc-400 border-t border-zinc-400 dark:text-zinc-500 dark:border-zinc-500 pt-4 print:hidden">
    <p>
      This resume is hosted on IPFS as a censorship-resistant dApp.{' '}
      <a href="https://ipfs.io" target="_blank" className="underline hover:opacity-70 transition-all duration-300">Learn more</a>
    </p>
    <p>
      This dApp doesn’t use cookies and doesn’t know who you are.
    </p>
    <p className="text-zinc-600 dark:text-zinc-200 text-lg font-bold pt-2 font-feature">
      Enjoy your privacy
    </p>
  </footer>
)

export default Footer;
