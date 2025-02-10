import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addItem } from '../utils/cardSlice'
import { useDispatch } from 'react-redux';
import Header from './Header'

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant_info, setRestaurant_info] = useState([]);
    const [cardItem, setCardItem] = useState([]);
    const dispatch = useDispatch();
    const fetchSwiggyMenuData = async () => {
        const res = await fetch("/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");
        const result = await res.json();
        const restaurant_info_data = result.data.cards[2].card.card.info

        const card_item_data = result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        console.log('card_item_data >>>', card_item_data)
        setRestaurant_info(restaurant_info_data)
        setCardItem(card_item_data)
    }

    useEffect(() => {
        fetchSwiggyMenuData();
    }, []);

    const handleClick = (item) => {
        dispatch(addItem(item))
    }

    return restaurant_info.length < 1 ? <h1>Loading...</h1> : (
        <>
            <Header />

            <div className='menu_page_container'>
                <div className='restaurant_info'>
                    <div className='menu_card' >
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant_info.cloudinaryImageId}`}
                            alt=""
                        />
                        <h3>{restaurant_info.name}</h3>
                        <br />
                        <p><b>Restaurant id: </b>{restaurant_info.id}</p>
                        <p><b>Address:</b> {restaurant_info.locality}, {restaurant_info.city} </p>
                        <p><b>Ratings:</b> {restaurant_info.avgRating} </p>

                    </div>
                </div>
                {cardItem &&
                    <div className='menu_info'>
                        <h3>Menu Item</h3>
                        {
                            cardItem.map((el) => {
                                return (
                                    <div className='menu_list_div'>
                                        <li>{el.card.info.name}</li>
                                        <button onClick={() => handleClick(el.card.info)}>Add to cart</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                }
            </div>

        </>
    )
}

export default RestaurantMenu
