'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-white/5 dark:bg-black/5 p-1 rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${
          theme === 'light'
            ? 'bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm'
            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
        aria-label="Light mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark'
            ? 'bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm'
            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${
          theme === 'system'
            ? 'bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm'
            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        }`}
        aria-label="System theme"
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
