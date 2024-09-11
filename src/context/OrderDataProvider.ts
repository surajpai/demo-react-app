import { useState } from 'react';
import { IOrderDataProvider, Order } from './OrderContext';
import { CartItem } from '../types';

export function useOrderDataProvider(): IOrderDataProvider {
    const [order, setOrderState] = useState<Order | null>(null);

    const setOrder = (newOrder: Order) => {
        setOrderState(newOrder);
    };

    const updateOrderItems = (items: CartItem[]) => {
        if (order) {
            setOrderState({ ...order, orderedItems: items });
        }
    };

    const clearOrder = () => {
        setOrderState(null);
    };

    return { order, setOrder, updateOrderItems, clearOrder };
}