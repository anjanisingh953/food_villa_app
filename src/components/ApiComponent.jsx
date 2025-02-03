import React, { useEffect } from 'react'
import useCurrentLocation from '../utils/useCurrentLocation.js';

const ApiComponent = () => {

    const { latitude, longitude, error, loading } = useCurrentLocation();


    // const fetchdata = async () => {
    //     const res = await fetch('/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //     const result = await res.json();
    //     console.log(result)
    // }



    useEffect(() => {


    }, []);

    return (
        <div>
            <h1>This is api ApiComponent {latitude} {longitude}</h1>

        </div>
    )
}

export default ApiComponent
