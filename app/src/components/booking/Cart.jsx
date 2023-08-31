import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cart } = useCart();

    return (
        <div className="justify-start text-left text-blue-500 font-semibold bg-gray-100 p-4">
            <p className="text-3xl">Your Cart</p>
            <p>Standard Tickets: {cart.standard}</p>
            <p>Elite Tickets: {cart.elite}</p>
            <p>2-person tent: {cart.twoperson}</p>
            <p>3-person tent: {cart.threeperson}</p>
        </div>
    );
};

export default Cart;
