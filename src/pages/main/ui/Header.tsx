import {ThemeController} from "../../../features/themeController/ThemeController";

const Header = () => (
  <header className="w-dvw items-center fixed top-0 left-0 h-12 md:h-16 bg-zinc-400 dark:bg-zinc-900 flex justify-center print:hidden">
    <div className="max-w-4xl w-full flex justify-between items-center px-4 sm:px-8">
      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-zinc-300 dark:text-zinc-400 font-feature">KISLOVA ALISA</h3>
      <ThemeController/>
    </div>
  </header>
)

export default Header
