import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Category } from './components/Category';
import { OrderConfirmation } from './components/OrderConfirmation';
import { EditOrder } from './components/EditOrder';
import { Header } from './components/Header';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { OrderProvider } from './context/OrderContext';
import { useProductDataProvider } from './context/ProductDataProvider';
import { useCartDataProvider } from './context/CartDataProvider';
import { useUserDataProvider } from './context/UserDataProvider';
import { useOrderDataProvider } from './context/OrderDataProvider';

const App: React.FC = () => {
  const productProvider = useProductDataProvider();
  const cartProvider = useCartDataProvider();
  const userProvider = useUserDataProvider();
  const orderProvider = useOrderDataProvider();

  return (
    <ProductProvider provider={productProvider}>
      <CartProvider provider={cartProvider}>
        <UserProvider provider={userProvider}>
          <OrderProvider provider={orderProvider}>
            <Router>
              <div className="container mx-auto p-4">
                <Header />
                <div className="flex flex-col md:flex-row">
                  <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/category/:category" element={<Category />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    <Route path="/edit-order" element={<EditOrder />} />
                  </Routes>
                  <Cart />
                </div>
              </div>
            </Router>
          </OrderProvider>
        </UserProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;