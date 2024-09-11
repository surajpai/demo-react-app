import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

export const Header: React.FC = () => {
    const { categories } = useProducts();

    return (
        <header className="bg-gray-800 text-white mb-4">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Simple Shopping App</Link>
                <ul className="flex space-x-4">
                    {categories.map(category => (
                        <li key={category}>
                            <Link to={`/category/${category}`} className="hover:text-gray-300">{category}</Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};