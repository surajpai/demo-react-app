import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { CartAdapter } from '../patterns/CartAdapter';

export const Category: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const { products } = useProducts();
    const { addToCart } = useCart();

    const categoryProducts = products.filter(product => product.category === category);

    return (
        <div className="w-full md:w-2/3 pr-4">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            {categoryProducts.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryProducts.map(product => (
                        <div key={product.id} className="border p-4 rounded">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover mb-2" />
                                <h3 className="font-bold">{product.name}</h3>
                                <p>${product.price.toFixed(2)}</p>
                            </Link>
                            <button
                                onClick={() => addToCart(CartAdapter.toCartItem(product))}
                                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};