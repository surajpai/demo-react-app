import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full md:w-1/3 mt-4 md:mt-0">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">
            Total: ${total.toFixed(2)}
          </div>
            <Link to="/checkout" className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full block text-center">
              Proceed to Checkout
            </Link>
        </>
      )}
    </div>
  );
};