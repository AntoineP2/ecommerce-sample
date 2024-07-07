import { getCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';
import { create } from 'zustand'
import { ProductType, StoreSectionIconType, ThemeType } from './type';

type StateType = {
  count: number;
  showShop: boolean;
  showProductDetail: boolean;
  successPayment: boolean;
  price: number;
  currentProduct: ProductType | null;
  currentSection: StoreSectionIconType | null;
  searchShopEntry: string;
  openSuccessPayment: () => void;
  closeSuccessPayment: () => void;
  setSearchShopEntry: (entry: string) => void;
  setCurrentProduct: (product: ProductType) => void;
  setCurrentSection: (section: StoreSectionIconType) => void;
  increase: () => void;
  decrease: () => void;
  closeShop: () => void;
  openShop: () => void;
  closeProductDetail: () => void;
  openProductDetail: () => void;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  cartItemList: ProductType[];
  setCartItemList: (cartItem: ProductType) => void;
  removeCartItem: (cartItem: ProductType) => void;
  resetCartItemList: () => void;
  theme: ThemeType;
  paymentStep: number;
  setPaymentStep: (step: number) => void;
}

const getInitialTheme = async (): Promise<ThemeType> => {
  const savedTheme = await getCookie('theme');

  // Vérification stricte du type de thème
  if (savedTheme === 'darkTheme' || savedTheme === 'lightTheme') {
    return savedTheme;
  }

  // Retourner le thème par défaut si le thème n'est pas valide
  return 'darkTheme';
};

const useAppStore = create<StateType>((set) => ({
  count: 0,
  price: 0,
  showShop: false,
  showProductDetail: false,
  theme: 'darkTheme',
  cartItemList: [],
  currentProduct: null,
  currentSection: null,
  searchShopEntry: '',
  paymentStep: 0,
  successPayment: false,
  openSuccessPayment: () => set(() => ({ successPayment: true })),
  closeSuccessPayment: () => set(() => ({ successPayment: false })),
  setPaymentStep: (step: number) => set(() => ({ paymentStep: step })),
  setSearchShopEntry: (entry: string) => set(() => ({ searchShopEntry: entry })),
  setCurrentProduct: (product: ProductType) => set(() => ({ currentProduct: product })),
  setCurrentSection: (section: StoreSectionIconType) => set(() => ({ currentSection: section })),
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  openShop: () => set(() => ({ showShop: true })),
  closeShop: () => set(() => ({ showShop: false })),
  openProductDetail: () => set(() => ({ showProductDetail: true })),
  closeProductDetail: () => set(() => ({ showProductDetail: false })),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    setCookie('theme', newTheme);
    return { theme: newTheme };
  }),
  setTheme: (theme: ThemeType) => set(() => {
    setCookie('theme', theme);
    return { theme };
  }),
  setCartItemList: (cartItem: ProductType) => set((state) =>
  ({
    cartItemList: [...state.cartItemList, cartItem],
    price: parseFloat((state.price + cartItem.price).toFixed(2))
  })),
  removeCartItem: (cartItem: ProductType) => set((state) =>
  ({
    cartItemList: removeElement(state.cartItemList, cartItem, 1),
    price: parseFloat((state.price - cartItem.price).toFixed(2))
  })),
  resetCartItemList: () => set(() => ({ cartItemList: [] }))

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
const removeElement = (cartItemList: ProductType[], cartItem: ProductType, number: number): ProductType[] => {
  const itemList = cartItemList.filter(item => item.id === cartItem.id).slice(number);
  const itemListUpdate = [...cartItemList.filter(item => item.id !== cartItem.id), ...itemList]
  return itemListUpdate;
}


export { useAppStore, useInitializeTheme };