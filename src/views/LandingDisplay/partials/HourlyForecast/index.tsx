import React, { FC } from "react";
import CardHeader from '../../../../components/Card/partials/CardHeader'
import CardBody from '../../../../components/Card/partials/CardBody'
import Card from '../../../../components/Card/index';
import { formatTime } from '../../../../services/formatters/timeFormatter'
import Sunny from '../../../../assets/icons/weather/sunny.png'
import Clear from '../../../../assets/icons/weather/clear.png'
import { next_arrow } from '../../../../assets/icons/index';
import { ForecastProps, HourlyData } from '../../index.interface'

const HourlyForecast: FC<ForecastProps> = ({ landResponse }) => {
    let hourlyData = landResponse.weather[0].hourly;
    function scrollLeft() {
        document.querySelector('.hourly-forecast-list')?.scrollBy(-300, 0)
    }

    function scrollRight() {
        let scrolledElement = document.querySelector('.hourly-forecast-list')
        scrolledElement?.scrollBy(300, 0)
    }

    return (
        <Card className="hourly-forecast">
            <CardHeader>Hourly Forecast</CardHeader>
            <CardBody>
                <button onClick={() => scrollLeft()} className={'left-button'}>{next_arrow}</button>
                <ul className="hourly-forecast-list">
                    {hourlyData.map((hourData: HourlyData) =>
                        <li key={hourData.time} className="hourly-forecast-item">
                            {hourData.weatherDesc[0].value === 'Sunny' && <img src={Sunny} />}
                            {hourData.weatherDesc[0].value === 'Clear' && <img src={Clear} />}
                            {hourData.weatherDesc[0].value !== 'Sunny' && hourData.weatherDesc[0].value !== 'Clear' &&
                                <img src={hourData.weatherDesc[0].value} />}
                            <div className="summary">{hourData.weatherDesc[0].value}</div>
                            <div className="temperature">{hourData.tempC}°C</div>
                            <div className="time">{formatTime(hourData.time)}</div>
                        </li>)}
                </ul>
                <button onClick={() => scrollRight()} className={'right-button'}>{next_arrow}</button>
            </CardBody>
        </Card>
    )
}
export default HourlyForecast;