import { CartItem, Product } from '../types';

export class CartAdapter {
  static toCartItem(product: Product, quantity: number = 1): CartItem {
    return {
      ...product,
      quantity,
      image: product.images[0],
    };
  }
}