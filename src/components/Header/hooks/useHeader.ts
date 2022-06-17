import { useEffect, useState } from "react";
import { Location, City } from '../../../views/LandingDisplay/index.interface';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { AllCitiesResponse } from '../index.interface'
const useHeader = (setUserLocation: Function) => {
    const [locationCities, setLocationCities] = useState<City[]>([]);
    let history = useHistory();

    const getUserLocation = async () => {
        try {
            const locationResponse = await axios.get<Location>('https://geolocation-db.com/json/');
            if (locationResponse.data) {
                setUserLocation(locationResponse.data)
                getAllCities(locationResponse.data.latitude, locationResponse.data.longitude)
            }
        }
        catch (error) {
            // error should be handled here
        }
    }

    const getAllCities = async (lat: number, long: number) => {

        try {
            const allCitiesResponse = await axios.get<AllCitiesResponse>(
                'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
                {
                    params: { location: long < 0 ? `${lat}${long}` : `${lat}+${long}` },
                    headers: {
                        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
                        'X-RapidAPI-Key': '44d56dc0fcmsh1c750cd6f26c5cfp1b2fa8jsndb69c30c0282'
                    }
                });
            if (allCitiesResponse) {
                setLocationCities(allCitiesResponse.data.data)
            }
        }
        catch (error) {
        }
    }
    const handleCitySelection = (city: City) => {
        history.push({
            pathname: '/dashboard',
            state: { selectedCity: city }
        })
    }

    useEffect(() => {
        getUserLocation();
        // eslint-disable-next-line
    }, [])

    return { locationCities, handleCitySelection }
}

export default useHeader