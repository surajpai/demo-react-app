import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import { Cart } from './components/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { useProductDataProvider } from './context/ProductDataProvider';
import { useCartDataProvider } from './context/CartDataProvider';

const App: React.FC = () => {
  const productProvider = useProductDataProvider();
  const cartProvider = useCartDataProvider();

  return (
    <ProductProvider provider={productProvider}>
      <CartProvider provider={cartProvider}>
        <Router>
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Simple Shopping App</h1>
            <div className="flex flex-col md:flex-row">
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Cart />
            </div>
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;