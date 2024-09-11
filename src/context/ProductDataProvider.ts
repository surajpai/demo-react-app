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
            factory.createProduct(
                1,
                'Deluxe Coffee Maker',
                129.99,
                'Experience the perfect brew with our Deluxe Coffee Maker. This state-of-the-art machine features precision temperature control, a built-in grinder, and a programmable timer. Whether you prefer a strong espresso or a mild latte, this coffee maker delivers barista-quality drinks right in your kitchen.',
                [`${imageUrl}400/400?coffee=1`, `${imageUrl}400/400?coffee=2`],
                'Kitchen Appliances'
            ),
            factory.createProduct(
                2,
                'Smart Home Security System',
                299.99,
                'Protect your home with our cutting-edge Smart Home Security System. This comprehensive package includes HD cameras, motion sensors, and a central hub that connects to your smartphone. Receive real-time alerts, monitor your property remotely, and enjoy peace of mind knowing your home is secure 24/7.',
                [`${imageUrl}400/400?security=1`, `${imageUrl}400/400?security=2`],
                'Smart Home'
            ),
            factory.createProduct(
                3,
                'Ultra-Thin 4K OLED TV',
                1499.99,
                'Immerse yourself in stunning visuals with our Ultra-Thin 4K OLED TV. This 65-inch masterpiece delivers unparalleled picture quality with deep blacks, vibrant colors, and incredible contrast. Featuring AI-enhanced upscaling and a sleek design, this TV will transform your living room into a home theater.',
                [`${imageUrl}400/400?tv=1`, `${imageUrl}400/400?tv=2`],
                'Electronics'
            ),
            factory.createProduct(
                4,
                'Ergonomic Office Chair',
                249.99,
                'Work in comfort with our Ergonomic Office Chair. Designed to support your body during long hours at the desk, this chair features adjustable lumbar support, breathable mesh backing, and customizable armrests. The advanced tilt mechanism and memory foam seat ensure optimal comfort throughout your workday.',
                [`${imageUrl}400/400?chair=1`, `${imageUrl}400/400?chair=2`],
                'Furniture'
            ),
            factory.createProduct(
                5,
                'Professional DSLR Camera Kit',
                1299.99,
                'Capture life\'s moments in stunning detail with our Professional DSLR Camera Kit. This comprehensive package includes a high-resolution full-frame sensor, 4K video capabilities, and a versatile 24-70mm lens. Whether you\'re a seasoned photographer or an enthusiastic beginner, this camera delivers exceptional image quality in any situation.',
                [`${imageUrl}400/400?camera=1`, `${imageUrl}400/400?camera=2`],
                'Electronics'
            ),
            factory.createProduct(
                6,
                'Smart Fitness Tracker',
                79.99,
                'Achieve your health goals with our Smart Fitness Tracker. This sleek wearable device monitors your heart rate, tracks your sleep patterns, and counts your steps. With built-in GPS and water resistance, it\'s perfect for all your outdoor activities. Sync with our mobile app to get personalized insights and motivation to stay active.',
                [`${imageUrl}400/400?fitness=1`, `${imageUrl}400/400?fitness=2`],
                'Wearables'
            ),
            factory.createProduct(
                7,
                'Gourmet Knife Set',
                199.99,
                'Elevate your culinary skills with our Gourmet Knife Set. Crafted from high-carbon stainless steel, these precision-forged knives offer exceptional sharpness and durability. The set includes a chef\'s knife, santoku, bread knife, utility knife, and paring knife, all stored in a beautiful acacia wood block. Perfect for both professional chefs and home cooking enthusiasts.',
                [`${imageUrl}400/400?knives=1`, `${imageUrl}400/400?knives=2`],
                'Kitchen Appliances'
            ),
            factory.createProduct(
                8,
                'Wireless Noise-Cancelling Headphones',
                249.99,
                'Immerse yourself in pure audio bliss with our Wireless Noise-Cancelling Headphones. Featuring advanced active noise cancellation technology, these headphones deliver crystal-clear sound while blocking out ambient noise. With 30 hours of battery life, comfortable over-ear design, and intuitive touch controls, they\'re perfect for travel, work, or relaxation.',
                [`${imageUrl}400/400?headphones=1`, `${imageUrl}400/400?headphones=2`],
                'Electronics'
            ),
            factory.createProduct(
                9,
                'Smart Thermostat',
                179.99,
                'Optimize your home\'s climate and energy efficiency with our Smart Thermostat. This intelligent device learns your preferences and routines to automatically adjust your home\'s temperature for optimal comfort and savings. With smartphone control, energy usage reports, and compatibility with major smart home systems, it\'s the perfect upgrade for any modern home.',
                [`${imageUrl}400/400?thermostat=1`, `${imageUrl}400/400?thermostat=2`],
                'Smart Home'
            ),
            factory.createProduct(
                10,
                'Luxury Memory Foam Mattress',
                899.99,
                'Experience the ultimate in sleep comfort with our Luxury Memory Foam Mattress. This premium mattress combines cooling gel-infused memory foam with a supportive base layer to provide the perfect balance of softness and support. The breathable, hypoallergenic cover ensures a cool and fresh sleep environment. Wake up refreshed and rejuvenated every morning.',
                [`${imageUrl}400/400?mattress=1`, `${imageUrl}400/400?mattress=2`],
                'Furniture'
            ),
        ];
        setProducts(fetchedProducts);

        const uniqueCategories = Array.from(new Set(fetchedProducts.map(p => p.category)));
        setCategories(uniqueCategories);
    }, []);

    return { products, categories };
}