import React, { FC } from "react";
import WeatherItem from "../../../../../components/WeatherItem";
import temperature from "../../../../../assets/icons/weather/temperature.png"
import humidity from "../../../../../assets/icons/weather/humidity.png"
import visibility from "../../../../../assets/icons/weather/visibility.png"
import uvIndex from "../../../../../assets/icons/weather/uv-index.png"
import precipitation from "../../../../../assets/icons/weather/precipitation.png"
import wind from "../../../../../assets/icons/weather/wind.svg"
import direction from "../../../../../assets/icons/weather/direction.png"
import pressure from "../../../../../assets/icons/weather/pressure.png"
import cloud from "../../../../../assets/icons/weather/cloud-cover.png"
import {LandWeatherDataResponse} from '../../../index.interface'
const WeatherDetails: FC<LandWeatherDataResponse> = ({ data }) => {
    let conditionObject = data.current_condition[0]
    return (
        <div className="weather-details">
            <WeatherItem itemName={'Feels Like'}
                itemIcon={temperature}
                itemValue={`${conditionObject.FeelsLikeC}°C`}
            />
            <WeatherItem itemName={'Humidity'}
                itemIcon={humidity}
                itemValue={`${conditionObject.humidity}%`}
            />
            <WeatherItem itemName={'Visibility'}
                itemIcon={visibility}
                itemValue={`${conditionObject.visibility}km`}
            />
            <WeatherItem itemName={'UV Index'}
                itemIcon={uvIndex}
                itemValue={`${conditionObject.uvIndex}`}
            />
            <WeatherItem itemName={'Precipitation'}
                itemIcon={precipitation}
                itemValue={`${conditionObject.precipMM}mm`}
            />
            <WeatherItem itemName={'Wind Speed'}
                itemIcon={wind}
                itemValue={`${conditionObject.winddir16Point} ${conditionObject.windspeedKmph}Km/hr`}
            />
             <WeatherItem itemName={'Wind Direction'}
                itemIcon={direction}
                itemValue={`${conditionObject.winddirDegree}°`}
            />
            <WeatherItem itemName={'Pressure'}
                itemIcon={pressure}
                itemValue={`${conditionObject.pressure}hPa`}
            />
            <WeatherItem itemName={'Cloud Cover'}
                itemIcon={cloud}
                itemValue={conditionObject.cloudcover}
            />
        </div>
    )
}
export default WeatherDetails;