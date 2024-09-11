import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { User } from '../types';
import { OrderConfirmation } from './OrderConfirmation';

export const Checkout: React.FC = () => {
    const { cart, clearCart } = useCart();
    const { setUser } = useUser();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [orderedItems, setOrderedItems] = useState(cart);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const user: User = {
            id: Date.now(),
            ...formData,
            };
            setUser(user);
            const generatedOrderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            setOrderNumber(generatedOrderNumber);
            setOrderedItems([...cart]);
            setOrderPlaced(true);
            clearCart();
        }
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            alert('Please enter your name');
            return false;
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            alert('Please enter a valid email address');
            return false;
        }
        if (!formData.address.trim()) {
            alert('Please enter your address');
            return false;
        }
        return true;
    };

    if (orderPlaced) {
        return <OrderConfirmation user={formData as User} orderNumber={orderNumber} orderedItems={orderedItems} />;
    }

    return (
        <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Order Summary</h3>
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="font-bold mt-2">Total: ${total.toFixed(2)}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Place Order
                </button>
            </form>
        </div>
    );
};