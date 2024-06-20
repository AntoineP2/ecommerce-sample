import { getCookie, setCookie } from 'cookies-next';
import { create } from 'zustand'

type ThemeType = 'light' | 'dark' | 'cupcake';
type StateType = {
  count: number;
  increase: () => void;
  decrease: () => void;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  theme: ThemeType
}

const getInitialTheme = async (): ThemeType => {
    const savedTheme = await getCookie('theme') as ThemeType | undefined;
    return savedTheme || 'light';
  };


const useAppStore = create<StateType>((set) => ({
  count: 0,
  theme: getInitialTheme(),
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setCookie('theme', newTheme);
    return { theme: newTheme };
  }),
  setTheme: (theme: ThemeType) => set(() => {
    setCookie('theme', theme);
    return { theme };
  }),
}));

export default useAppStore;