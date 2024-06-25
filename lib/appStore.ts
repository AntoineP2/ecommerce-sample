import { getCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';
import { create } from 'zustand'
import { ProductType, ThemeType } from './type';

type StateType = {
  count: number;
  showShop: boolean;
  price: number;
  increase: () => void;
  decrease: () => void;
  closeShop: () => void;
  openShop: () => void;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  cartItemList: ProductType[];
  setCartItemList: (cartItem: ProductType) => void;
  removeCartItem: (cartItem: ProductType) => void;
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
  price: 0,
  showShop: false,
  theme: 'lightTheme',
  cartItemList: [],
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  openShop: () => set(() => ({ showShop: true })),
  closeShop: () => set(() => ({ showShop: false })),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    setCookie('theme', newTheme);
    return { theme: newTheme };
  }),
  setTheme: (theme: ThemeType) => set(() => {
    setCookie('theme', theme);
    return { theme };
  }),
  setCartItemList : (cartItem: ProductType) => set((state) => 
    ({
      cartItemList : [...state.cartItemList, cartItem],
      price: parseFloat((state.price + cartItem.price).toFixed(2))
  })),
  removeCartItem : (cartItem: ProductType) => set((state) => 
    ({
      cartItemList : removeElement(state.cartItemList, cartItem, 1),
      price: parseFloat((state.price - cartItem.price).toFixed(2))
    })),

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

// Cette methode va supprimer un nombre définit d'élément dans le panier selon l'id ciblé
const removeElement = (cartItemList: ProductType[], cartItem:ProductType, number: number): ProductType[] => {
  const itemList = cartItemList.filter(item => item.id === cartItem.id).slice(number);
  const itemListUpdate = [...cartItemList.filter(item => item.id !== cartItem.id), ...itemList]
  return itemListUpdate;
}


export { useAppStore, useInitializeTheme };