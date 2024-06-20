"use client"
import { useAppStore, useInitializeTheme } from "@/lib/appStore";


// Définir les props pour le composant ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useInitializeTheme();
  const { theme } = useAppStore();

  return (
    <div data-theme={theme} className="min-h-full">{children}</div>
  );
}

export default ThemeProvider;
