import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const item of cart) {
        total = item.booksNumber;
    }
    return (
        <div>
            <h4>Writers Added:{cart.length}</h4>
            <h6>Books Added:{total}</h6>
        </div>
    );
};

export default Cart;