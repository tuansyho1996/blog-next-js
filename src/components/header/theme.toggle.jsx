'use client';

import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Đọc theme từ localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className=" "
    >
      {isDark ?
        <LightModeIcon
          style={{ color: 'var(--foreground)', }}
          fontSize='large'
          cursor='pointer'
        /> :
        <DarkModeIcon
          style={{ color: 'var(--foreground)', }}
          fontSize='large'
          cursor='pointer'
        />
      }
    </button>
  );
}
