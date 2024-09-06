import React from 'react';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Simple Shopping App</h1>
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
