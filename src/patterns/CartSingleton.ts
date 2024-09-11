import { CartItem } from '../types';

export class CartSingleton {
  private static instance: CartSingleton;
  private items: CartItem[] = [];

  private constructor() {}

  public static getInstance(): CartSingleton {
    if (!CartSingleton.instance) {
      CartSingleton.instance = new CartSingleton();
    }
    return CartSingleton.instance;
  }

  public addItem(item: CartItem): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push(item);
    }
  }

  public removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  public getItems(): CartItem[] {
    return this.items;
  }

  public clearCart(): void {
    this.items = [];
  }

  public getUniqueItemCount(): number {
    return new Set(this.items.map(item => item.id)).size;
  }
}