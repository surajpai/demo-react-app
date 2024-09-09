import { CartItem } from "@/types";
import { ICartDataProvider } from "./CartContext";
import { useState } from "react";

export function useCartDataProvider(): ICartDataProvider {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    return {
        cart: cartItems,
        addToCart: (item: CartItem) => {
            const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                const updatedItems = cartItems.map(c => {
                    if (c.id === item.id) {
                        return { ...item, quantity: c.quantity + 1 }
                    } else return c;
                });

                setCartItems(updatedItems);
            } else {
                setCartItems([...cartItems, item])
            }
        },
        removeFromCart: (itemId: number) => {
            setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        },
    };
}

