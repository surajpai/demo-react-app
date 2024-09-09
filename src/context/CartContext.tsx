
import React, { createContext, PropsWithChildren, useContext } from 'react';
import { CartItem } from '../types';

export type ICartDataProvider = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
};

type CartDataProviderProps = PropsWithChildren<{
  provider: ICartDataProvider;
}>;

const CartContext = createContext<CartDataProviderProps | undefined>(undefined);

export const CartProvider: React.FC<CartDataProviderProps> = ({ children, provider }) => {

  return (
    <CartContext.Provider value={{ provider }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context.provider;
};
