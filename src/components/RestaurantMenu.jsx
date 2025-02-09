import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const { id } = useParams()

    const fetchSwiggyMenuData = async () => {
        const res = await fetch("/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=816024&catalog_qa=undefined&submitAction=ENTER");
        const result = await res.json();
        console.log('result >>> ', result);
    }

    useEffect(() => {
        fetchSwiggyMenuData();
    }, []);

    return (
        <>
            <h1>Restaurant Id : {id}</h1>

        </>
    )
}

export default RestaurantMenu
