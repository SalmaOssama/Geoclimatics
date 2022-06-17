import React, { FC } from "react";
import Loader from "../../components/Loader";
import useWeatherDashboard from './hooks/useWeatherDashboard';
import TodaysTemperature from "./partials/TodaysTemperature";
import TemperatureHistory from "./partials/TemperatureHistory";
import TodaysWeather from './partials/TodaysWeather'
import WeatherHistory from "./partials/WeatherHistory";
import CurrentCityCondition from './partials/CurrentCityCondition'
import CurrentCondition from "../LandingDisplay/partials/CurrentCondition/index";

const WeatherDashboard: FC = () => {
    const { historicalCityResponse, statisticalCityResponse, selectedCity }
        = useWeatherDashboard();
    if (!historicalCityResponse || !statisticalCityResponse || !selectedCity)
        return <Loader />
    return (
        <div className="weather-dashboard-content-container">
            <CurrentCityCondition data={statisticalCityResponse} />
            <CurrentCondition cardTitle={'Summary'} location={selectedCity.name} response={statisticalCityResponse} />
            <TodaysTemperature data={statisticalCityResponse} />
            <TodaysWeather data={statisticalCityResponse} />
            <TemperatureHistory data={historicalCityResponse.data}/>
            <WeatherHistory data={historicalCityResponse.data} />
        </div>
    )
}
export default WeatherDashboard;