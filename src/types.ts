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
  image: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}