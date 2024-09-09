
import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Product } from '../types';

export type IProductDataProvider = {
  products: Product[];
}

type ProductProviderProps = PropsWithChildren<{
  provider: IProductDataProvider;
}>;

const ProductContext = createContext<ProductProviderProps | undefined>(undefined);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children, provider }) => {


  return (
    <ProductContext.Provider value={{ provider }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context.provider;
};
