import { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { City } from "../../LandingDisplay/index.interface";
import { useHistory } from 'react-router-dom';
import {LandWeatherDataResponse,LandWeatherData} from '../../LandingDisplay/index.interface'
import {HistoricalWeatherResponse} from '../index.interface'
let historicalBaseUrl = process.env.REACT_APP_HISTORICAL_WEATHER_API_KEY;
let statisticalBaseUrl = process.env.REACT_APP_WEATHER_API_KEY;

const useWeatherDashboard = () => {
    const [historicalCityResponse, setHistoricalCityResponse] = useState<HistoricalWeatherResponse>();
    const [statisticalCityResponse, setStatisticalCityResponse] = useState<LandWeatherData>();
    const [selectedCity, setSelectedCity] = useState<City>()
    const location = useLocation();
    const { push } = useHistory();

    const getHistoricalCityWeatherData = async () => {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() -1)
        let yesterdayFormatted = `${yesterday.getFullYear()}-${(yesterday.getMonth() + 1).toString().padStart(2, "0")}-${(yesterday.getDate()).toString().padStart(2, "0")}`;
        let selectedCity = (location as any).state?.selectedCity
        let url = `${historicalBaseUrl}&q=${selectedCity.latitude},${selectedCity.longitude}&tp=1&&format=json&date=${yesterdayFormatted}`
        const response = await axios.get<HistoricalWeatherResponse>(url);
        if (response) {
            setHistoricalCityResponse(response.data)
        }
    }

    const getStatisticalCityWeatherData = async () => {
        let selectedCity = (location as any).state?.selectedCity
        let url = `${statisticalBaseUrl}&q=${selectedCity.latitude},${selectedCity.longitude}&num_of_days=1&format=json&date=today&fx24=yes&tp=1`
        const response = await axios.get<LandWeatherDataResponse>(url);
        if (response) {
            setStatisticalCityResponse(response.data.data)
        }
    }
    useEffect(() => {
        if ((location as any).state?.selectedCity) {
            setSelectedCity((location as any).state?.selectedCity)
            getHistoricalCityWeatherData()
            getStatisticalCityWeatherData()
        }
        else{
            push('/')
        }
    }, [])

    return { historicalCityResponse,statisticalCityResponse, selectedCity }
}

export default useWeatherDashboard