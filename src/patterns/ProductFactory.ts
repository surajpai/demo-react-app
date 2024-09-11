import { Product } from '../types';

export class ProductFactory {
  createProduct(id: number, name: string, price: number, description: string, images: string[]): Product {
    return { id, name, price, description, images };
  }
}