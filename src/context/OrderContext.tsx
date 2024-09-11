import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { CartItem } from '../types';

export interface Order {
  orderNumber: string;
  orderedItems: CartItem[];
}

export type IOrderDataProvider = {
  order: Order | null;
  setOrder: (order: Order) => void;
  updateOrderItems: (items: CartItem[]) => void;
  clearOrder: () => void;
};

type OrderProviderProps = PropsWithChildren<{
  provider: IOrderDataProvider;
}>;

const OrderContext = createContext<OrderProviderProps | undefined>(undefined);

export const OrderProvider: React.FC<OrderProviderProps> = ({ children, provider }) => {
  return (
    <OrderContext.Provider value={{ provider }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context.provider;
};