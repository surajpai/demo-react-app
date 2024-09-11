import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
    const { categories } = useProducts();
    const { getTotalItems } = useCart();

    return (
        <header className="bg-gray-800 text-white mb-4">
            <nav className="container mx-auto px-4 py-2 flex items-center">
                <Link to="/" className="text-xl font-bold mr-6">Shopping App</Link>
                <ul className="flex space-x-4 flex-grow">
                    {categories.map(category => (
                        <li key={category}>
                            <Link to={`/category/${category}`} className="hover:text-gray-300">{category}</Link>
                        </li>
                    ))}
                </ul>
                <Link to="/checkout" className="flex items-center hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                        {getTotalItems()}
                    </span>
                </Link>
            </nav>
        </header>
    );
};