import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface OrderConfirmationProps {
    user: User;
    orderNumber: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ user, orderNumber }) => {
    return (
        <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Order Confirmed!</h2>
            <div className="mb-6">
                <p className="text-xl mb-2">Thank you for your order, {user.name}!</p>
                <p className="text-gray-600">Your order number is: <span className="font-bold">{orderNumber}</span></p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
                <h3 className="text-lg font-semibold mb-2">Order Details:</h3>
                <p>Email: {user.email}</p>
                <p>Shipping Address: {user.address}</p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">What's Next?</h3>
                <ol className="list-decimal list-inside">
                    <li>You will receive an order confirmation email shortly.</li>
                    <li>We will process your order and send a shipping confirmation when it's on its way.</li>
                    <li>You can track your order status using the order number provided above.</li>
                </ol>
            </div>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Continue Shopping
            </Link>
        </div>
    );
};