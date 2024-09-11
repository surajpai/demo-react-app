export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  address: string;
}