import React, { FC } from "react";
import CardHeader from "../../../../components/Card/partials/CardHeader";
import CardBody from "../../../../components/Card/partials/CardBody";
import Card from "../../../../components/Card/index";
import temperature from "../../../../assets/icons/weather/temperature.png"
import humidity from "../../../../assets/icons/weather/humidity.png"
import pressure from "../../../../assets/icons/weather/pressure.png"
import uvIndex from "../../../../assets/icons/weather/uv-index.png"
import visibility from "../../../../assets/icons/weather/visibility.png"
import GaugeCard from "./partials/GaugeCard";
import {LandWeatherDataResponse} from '../../../LandingDisplay/index.interface'

const CurrentCityCondition: FC<LandWeatherDataResponse> = ({ data }) => {
    let currentCityCondition = data.current_condition[0]
    let thresholds = {
        temperature: { min: 0, max: 50 },
        humidity: { min: 0, max: 100 },
        pressure: { min: 800, max: 1020 },
        uv: { min: 0, max: 15 },
        visibility: { min: 0, max: 10 }
    }
    return (
        <Card className="current-city-condition-container">
            <CardHeader>
                Current Condition
            </CardHeader>
            <CardBody>
                <GaugeCard icon={temperature} title={'Temperature'} value={currentCityCondition.temp_C + "°C"} angle={Number(currentCityCondition.temp_C) / (thresholds.temperature.max + thresholds.temperature.min) * 100} fill={'#E895A1'} />
                <GaugeCard icon={temperature} title={'Temperature'} value={currentCityCondition.FeelsLikeC + "°C"} angle={Number(currentCityCondition.FeelsLikeC) / (thresholds.temperature.max + thresholds.temperature.min) * 100} fill={'#A5D1EA'} />
                <GaugeCard icon={humidity} title={'Humidity'} value={currentCityCondition.humidity + "%"} angle={Number(currentCityCondition.humidity) / (thresholds.humidity.max + thresholds.humidity.min) * 100} fill={'#EDF3B0'} />
                <GaugeCard icon={pressure} title={'Pressure'} value={currentCityCondition.pressure + "hPa"} angle={Number(currentCityCondition.pressure) / (thresholds.pressure.max + thresholds.pressure.min) * 100} fill={'#A5EAAA'} />
                <GaugeCard icon={uvIndex} title={'UV Index'} value={currentCityCondition.uvIndex} angle={Number(currentCityCondition.uvIndex) / (thresholds.uv.max + thresholds.uv.min) * 100} fill={'#CAB0F3'} />
                <GaugeCard icon={visibility} title={'Visibility'} value={currentCityCondition.visibility} angle={Number(currentCityCondition.visibility) / (thresholds.visibility.max + thresholds.visibility.min) * 100} fill={'#EAC4A5'} />
            </CardBody>
        </Card>
    )
}
export default CurrentCityCondition;