import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useOrder } from '../context/OrderContext';

export const OrderConfirmation: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { order } = useOrder();

    if (!user || !order) {
        return <div>No order information available.</div>;
    }

    const { orderNumber, orderedItems } = order;
    const total = orderedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleEditOrder = () => {
        navigate('/edit-order');
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Order Confirmed!</h2>
            <div className="mb-6">
                <p className="text-xl mb-2">Thank you for your order, {user.name}!</p>
                <p className="text-gray-600">Your order number is: <span className="font-bold">{orderNumber}</span></p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="text-lg font-semibold mb-4">Order Details:</h3>
              <div className="mb-4">
                  <p>Email: {user.email}</p>
                  <p>Shipping Address: {user.address}</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                  <h4 className="font-semibold mb-2">Items Ordered:</h4>
                  <div className="space-y-4">
                      {orderedItems.map((item) => (
                          <div key={item.id} className="flex items-center">
                              {item.image ? (
                                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                              ) : (
                                  <div className="w-16 h-16 bg-gray-200 rounded mr-4 flex items-center justify-center">
                                      No image
                                  </div>
                              )}
                              <div className="flex-grow">
                                  <p className="font-semibold">{item.name}</p>
                                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                              </div>
                              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                      ))}
                  </div>
                  <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
                      <p className="font-semibold">Total:</p>
                      <p className="font-semibold">${total.toFixed(2)}</p>
                  </div>
              </div>
          </div>
            <button onClick={handleEditOrder} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-4">
                Edit Order
            </button>
          <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">What's Next?</h3>
              <ol className="list-decimal list-inside">
                  <li>You will receive an order confirmation email shortly.</li>
                  <li>We will process your order and send a shipping confirmation when it's on its way.</li>
                  <li>You can track your order status using the order number provided above.</li>
              </ol>
          </div>
            <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
              Continue Shopping
          </Link>
      </div>
  );
};