import { useEffect, useState } from "react";
import { Location, LandWeatherDataResponse, LandWeatherData } from '../index.interface';
import axios from 'axios';

let baseUrl = process.env.REACT_APP_WEATHER_API_KEY;

const useLandingDisplay = (userLocation: Location | undefined) => {
    const [landResponse, setLandResponse] = useState<LandWeatherData>();

    const getLandWeatherData = async () => {
        try {
            let url = `${baseUrl}&q=${userLocation!.IPv4}&num_of_days=1&format=json&date=today&fx24=yes&tp=1`
            const response = await axios.get<LandWeatherDataResponse>(url);
            if (response) {
                setLandResponse(response.data.data)
            }
        }
        catch (error) {
            //error handling behavior goes here
        }
    }
    useEffect(() => {
        if (userLocation) {
            getLandWeatherData()
        }
    }, [userLocation])


    return { landResponse }
}

export default useLandingDisplay