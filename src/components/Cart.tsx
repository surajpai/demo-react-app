import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full md:w-1/3 mt-4 md:mt-0 bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Product</th>
                  <th className="text-center py-2">Quantity</th>
                  <th className="text-right py-2">Price</th>
                  <th className="text-right py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded mr-2" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-2">{item.quantity}</td>
                    <td className="text-right py-2">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="text-right py-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
          </div>
            <Link
              to="/checkout"
              className="block w-full bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
        </>
      )}
    </div>
  );
};