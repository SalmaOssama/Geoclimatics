import React, { FC } from "react";
import { location_pin } from "../../../../assets/icons";
import WeatherDetails from "./partials/WeatherDetails";
import time from '../../../../assets/icons/constants/time.png';
import Sunny from '../../../../assets/icons/weather/sunny.png';
import Clear from '../../../../assets/icons/weather/clear.png';
import CardHeader from '../../../../components/Card/partials/CardHeader'
import CardBody from '../../../../components/Card/partials/CardBody'
import Card from '../../../../components/Card/index';
import {CurrentConditionProps} from '../../index.interface';
const CurrentCondition: FC<CurrentConditionProps> = ({ location, response,cardTitle }) => {

    let conditionObject = response.current_condition[0]
    return (
        <Card className="current-condition">
            <CardHeader>
                <span>{cardTitle}</span>
                <span className="current-location">
                    <span className="location-pin">{location_pin}</span>
                    {location}
                </span>
            </CardHeader>
            <CardBody>
                <div className="summary-wrapper">
                    {conditionObject.weatherDesc[0].value === 'Clear' && <img src={Clear} />}
                    {conditionObject.weatherDesc[0].value === 'Sunny' && <img src={Sunny} />}
                    {conditionObject.weatherDesc[0].value !== 'Sunny' && conditionObject.weatherDesc[0].value !== 'Clear' &&
                        <img src={`${conditionObject.weatherIconUrl[0].value}`} />}
                    <div className="summary-container">
                        <div className="current-temp">{conditionObject.temp_C}°C</div>
                        <div>{conditionObject.weatherDesc[0].value}</div>
                    </div>
                </div>
                <WeatherDetails data={response} />
            </CardBody>
            <span className="time">
                <img src={time} />
                {conditionObject.observation_time}
            </span>
        </Card>
    )
}
export default CurrentCondition;