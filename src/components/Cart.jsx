import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import Header from './Header';
import { clearCart } from '../utils/cardSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart())
    }
    return (
        <div style={{ margin: "10px" }}>
            <Header />
            <h2>Total Cart Item : {cartItems.length}</h2>
            <button className='clear_cart_btn' onClick={handleClick}>Clear Cart</button>
            <div className='main_cart_item_div'>
                {
                    cartItems.map((item) => <CartItem key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Cart
