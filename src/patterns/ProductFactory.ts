import { Product } from '../types';

export class ProductFactory {
  createProduct(id: number, name: string, price: number): Product {
    return { id, name, price };
  }
}
