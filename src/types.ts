export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}