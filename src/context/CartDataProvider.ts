import { CartItem } from "@/types";
import { ICartDataProvider } from "./CartContext";
import { useEffect, useState } from "react";
import { CartSingleton } from "../patterns/CartSingleton";

export function useCartDataProvider(): ICartDataProvider {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const cart = CartSingleton.getInstance();

    useEffect(() => {
        setCartItems(cart.getItems())
    }, [])

    return {
        cart: cartItems,
        addToCart: (item: CartItem) => {
            cart.addItem(item);
            setCartItems([...cart.getItems()]);
        },
        removeFromCart: (itemId: number) => {
            cart.removeItem(itemId);
            setCartItems(cart.getItems());
        },
        clearCart: () => {
            cart.clearCart();
            setCartItems([]);
        },
        getTotalItems: () => {
            return cart.getItemCount();
        },
    };
}

