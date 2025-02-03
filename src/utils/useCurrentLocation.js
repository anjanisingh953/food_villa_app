import { useEffect, useState } from "react";

const useCurrentLocation = function () {

    const [currentGeolocation, setCurrentGeolocation] = useState({ latitude: 22.7195687, longitude: 75.8577258 })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('custom api success is calling');
                setCurrentGeolocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            },
            (error) => {
                console.log('custom api error is calling');
                setCurrentGeolocation({ latitude: 0.0000, longitude: 0.0000 })
            }
        );

    }, [])

    return currentGeolocation;
};


export default useCurrentLocation;