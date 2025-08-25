'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeIndicator() {
  const { theme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm font-mono shadow-lg">
      <span className="text-gray-600 dark:text-gray-300">Theme: </span>
      <span className={`font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
        {theme}
      </span>
    </div>
  );
}
