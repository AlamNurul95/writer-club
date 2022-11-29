import React from 'react';
import { useEffect, useState } from 'react';
import Cart from './Cart';


import './Main.css'
import Writer from './Writer';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./writers.JSON')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUsers(data);

            });
    }, [])
    const addToCart = (users) => {
        const newCart = [...cart, users];
        setCart(newCart);

    }
    return (
        <div className='main-container'>
            <div className='writers-container'>
                {
                    users.map(user => <Writer value={user}
                        addToCart={addToCart}></Writer>)
                }


            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>



            </div>
        </div>
    );
};

export default Main;