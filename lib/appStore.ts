import { getCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';
import { create } from 'zustand'
import { ThemeType } from './type';

type StateType = {
  count: number;
  increase: () => void;
  decrease: () => void;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  theme: ThemeType
}

const getInitialTheme = async (): Promise<ThemeType> => {
  const savedTheme = await getCookie('theme');

  // Vérification stricte du type de thème
  if (savedTheme === 'lightTheme' || savedTheme === 'darkTheme') {
    return savedTheme;
  }

  // Retourner le thème par défaut si le thème n'est pas valide
  return 'lightTheme';
};

const useAppStore = create<StateType>((set) => ({
  count: 0,
  theme: 'lightTheme',
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    setCookie('theme', newTheme);
    return { theme: newTheme };
  }),
  setTheme: (theme: ThemeType) => set(() => {
    setCookie('theme', theme);
    return { theme };
  }),
}));

const useInitializeTheme = () => {
  const setTheme = useAppStore(state => state.setTheme);

  useEffect(() => {
    const initializeTheme = async () => {
      const initialTheme = await getInitialTheme();
      setTheme(initialTheme);
    };
    initializeTheme();
  }, [setTheme]);
};

export { useAppStore, useInitializeTheme };