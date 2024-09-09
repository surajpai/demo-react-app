import React from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { useCartDataProvider } from './context/CartDataProvider';
import { useProductDataProvider } from './context/ProductDataProvider';

const App: React.FC = () => {
  const cartDataProvider = useCartDataProvider();
  const productDataProvider = useProductDataProvider();

  return (
    <ProductProvider provider={productDataProvider}>
      <CartProvider provider={cartDataProvider}>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Shopping App</h1>
          <div className="flex flex-col md:flex-row">
            <ProductList />
            <Cart />
          </div>
        </div>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
