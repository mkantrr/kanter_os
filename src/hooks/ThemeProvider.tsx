import React, { useEffect, useState, createContext } from 'react';

export const useThemeMode = () => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode: string) => {
    window.localStorage.setItem('os_theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

  useEffect(() => {
    const localTheme = window.localStorage.getItem('os_theme');
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, themeToggler };
};

export const ThemeContext = createContext({
  theme: "", 
  themeToggler: () => {}, 
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const { theme, themeToggler } = useThemeMode();

  return <ThemeContext.Provider value={{theme, themeToggler }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
