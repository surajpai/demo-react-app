import { useState, useEffect } from 'react';
import { Product } from '../types';
import { IProductDataProvider } from './ProductContext';
import { ProductFactory } from '../patterns/ProductFactory';
import { imageUrl } from '../constants';
export function useProductDataProvider(): IProductDataProvider {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const factory = new ProductFactory();
        const fetchedProducts = [
            factory.createProduct(1, 'Product 1', 10, 'Description for Product 1', [`${imageUrl}400/400?random=1`, `${imageUrl}400/400?random=2`], 'Category 1'),
            factory.createProduct(2, 'Product 2', 15, 'Description for Product 2', [`${imageUrl}400/400?random=3`, `${imageUrl}400/400?random=4`], 'Category 2'),
            factory.createProduct(3, 'Product 3', 20, 'Description for Product 3', [`${imageUrl}400/400?random=5`, `${imageUrl}400/400?random=6`], 'Category 3'),
            factory.createProduct(4, 'Product 4', 210, 'Description for Product 4', [`${imageUrl}400/400?random=7`, `${imageUrl}400/400?random=8`], 'Category 4'),
            factory.createProduct(5, 'Product 5', 30, 'Description for Product 5', [`${imageUrl}400/400?random=9`, `${imageUrl}400/400?random=10`], 'Category 5'),
        ];
        setProducts(fetchedProducts);

        const uniqueCategories = Array.from(new Set(fetchedProducts.map(p => p.category)));
        setCategories(uniqueCategories);
    }, []);

    return { products, categories };
}