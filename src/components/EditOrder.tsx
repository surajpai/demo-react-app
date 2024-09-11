import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useOrder } from '../context/OrderContext';

export const EditOrder: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { order, updateOrderItems } = useOrder();

    if (!user || !order) {
        return <div>No order information available.</div>;
    }

    const [items, setItems] = useState(order.orderedItems);

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleSubmit = () => {
        updateOrderItems(items);
        navigate('/order-confirmation');
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Edit Order</h2>
            <div className="mb-6">
                <p className="text-gray-600">Order Number: <span className="font-bold">{order.orderNumber}</span></p>
            </div>
            <div className="space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center border-b pb-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                        <div className="flex-grow">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                            <span className="mx-2">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">Remove</button>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
                <p className="font-semibold">Total: ${total.toFixed(2)}</p>
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Update Order
                </button>
            </div>
            <Link to="/order-confirmation" className="block mt-4 text-blue-500 hover:underline">
                Back to Order Confirmation
            </Link>
        </div>
    );
};
