import { Product } from "../types";
import { useState } from "react";
import { IProductDataProvider } from "./ProductContext";
import { ProductFactory } from "../patterns/ProductFactory";

export function useProductDataProvider(): IProductDataProvider {
    const [products] = useState<Product[]>(() => {
        const factory = new ProductFactory();
        return [
            factory.createProduct(1, 'Product 1', 10),
            factory.createProduct(2, 'Product 2', 15),
            factory.createProduct(3, 'Product 3', 20),
            factory.createProduct(4, 'Product 4', 210),
            factory.createProduct(5, 'Product 5', 30),
        ];
    });

    return {
        products
    }
}

