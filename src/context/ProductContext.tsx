
import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';
import { ProductFactory } from '../patterns/ProductFactory';

interface ProductContextType {
  products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products] = useState<Product[]>(() => {
    const factory = new ProductFactory();
    return [
      factory.createProduct(1, 'Product 1', 10),
      factory.createProduct(2, 'Product 2', 15),
      factory.createProduct(3, 'Product 3', 20),
    ];
  });

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
