import { Product } from '../types';

export class ProductFactory {
  createProduct(id: number, name: string, price: number, description: string, images: string[], category: string): Product {
    return { id, name, price, description, images, category };
  }
}