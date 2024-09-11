import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { CartAdapter } from '../patterns/CartAdapter';

export const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useProducts();
    const { addToCart } = useCart();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Link to="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to Products</Link>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-auto" />
                    <div className="flex mt-4">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} thumbnail ${index + 1}`}
                                className={`w-16 h-16 object-cover mr-2 cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
                    <p className="mb-4">{product.description}</p>
                    <button
                        onClick={() => addToCart(CartAdapter.toCartItem(product))}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};