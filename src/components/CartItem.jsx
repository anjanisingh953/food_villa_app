import React from 'react'
const CartItem = ({ id, imageId, name, finalPrice }) => {
    return (
        <>
            <div className='cart_item_card' >

                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                    alt=""
                />
                <h5>{name}</h5>
                <br />
                <p>Restaurant id: {id}</p>
                <p>Price: {finalPrice ? finalPrice / 100 : 'Not Available'} {finalPrice && "INR"} </p>

            </div>
        </>
    )
}

export default CartItem
