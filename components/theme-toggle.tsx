'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(localStorage.getItem('doco-theme') === 'dark'), []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('doco-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return <button aria-label="Toggle dark mode" onClick={() => setDark(!dark)} className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-card text-ink shadow-sm transition hover:scale-105 dark:border-white/10 dark:text-lime">
    <Sun className={`absolute h-4 w-4 transition duration-300 ${dark ? '-translate-y-8 rotate-90 opacity-0' : 'translate-y-0 rotate-0'}`} />
    <Moon className={`absolute h-4 w-4 transition duration-300 ${dark ? 'translate-y-0 rotate-0' : 'translate-y-8 -rotate-90 opacity-0'}`} />
  </button>;
}
