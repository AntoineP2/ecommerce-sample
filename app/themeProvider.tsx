"use client"
import { useAppStore, useInitializeTheme } from "@/lib/appStore";
import { getCookie } from "cookies-next";
import { useEffect } from "react";


// Définir un type pour les thèmes possibles
type Theme = 'light' | 'dark' | 'cupcake' | undefined;

// Définir les props pour le composant ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  useInitializeTheme();

  const { theme } = useAppStore();

  // useEffect(() => {
  //   const savedTheme = getCookie('theme') as Theme;
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   }
  // }, [setTheme]);

  return (
    <div data-theme={theme}>{children}</div>
  );
}

export default ThemeProvider;
