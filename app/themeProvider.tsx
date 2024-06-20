"use client"
import useAppStore from "@/lib/appStore";
import { getCookie } from "cookies-next";
import { useEffect } from "react";


export const ThemeProvider: React.FC =  ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const { theme, setTheme } = useAppStore()

    console.log(theme);

    useEffect(() => {
        const savedTheme = getCookie('theme') as 'light' | 'dark' | 'cupcake' | undefined;
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, [setTheme]);

  return (
      <div data-theme={`${theme}`}>{children}</div>
  );
}

export default ThemeProvider;
