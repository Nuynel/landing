import { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import clsx from 'clsx'

// See +onRenderHtml for the minimized script that initializes theme on client side

type ControllerProps = { toggleTheme: () => void }

const ThemeToggler = ({toggleTheme}: ControllerProps) => {
  return (
    <button
      onClick={toggleTheme}
      className='flex w-12 rounded-full bg-zinc-300 dark:bg-zinc-800 p-1 hover:bg-zinc-200 hover:dark:bg-zinc-700 transition-all duration-300'
    >
      <div className='flex rounded-full transition-transform duration-300 dark:translate-x-5'>
        <span className='hidden dark:inline-block'>🌚</span>
        <span className='dark:hidden'>🌝</span>
      </div>
    </button>
  )
}

export const ThemeController = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false)

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark', 'bg-accent');
    } else {
      document.documentElement.classList.remove('dark', 'bg-accent');
    }
    localStorage.setItem('theme', newTheme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'dark' ? '#2D2D2E' : '#d9e3ed');
    }
  };

  useEffect(() => {
    setHydrated(true)
    const savedTheme = localStorage.getItem('theme')
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDarkMode(isDarkMode)
    // if (isDarkMode) document.documentElement.classList.add('bg-accent');
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkMode ? '#2D2D2E' : '#d9e3ed');
    }
  }, [hydrated])

  if (!hydrated) return null; // this line prevents flashing

  return <ThemeToggler toggleTheme={toggleTheme}/>
};
