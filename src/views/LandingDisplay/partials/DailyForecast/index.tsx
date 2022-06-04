import React, { FC, useState } from "react";
import CardHeader from '../../../../components/Card/partials/CardHeader'
import CardBody from '../../../../components/Card/partials/CardBody'
import Card from '../../../../components/Card/index'
import WeatherItem from "../../../../components/WeatherItem";
import temperature from "../../../../assets/icons/weather/temperature.png"
import astronomy from "../../../../assets/icons/constants/astronomy.png"
import calendar from "../../../../assets/icons/constants/calendar.png"
import { ForecastProps } from '../../index.interface'
const DailyForecast: FC<ForecastProps> = ({ landResponse }) => {

    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <Card className="daily-forecast">
            <CardHeader>Current Day Forecast</CardHeader>
            <CardBody>
                <div className="tabs-container">
                    <div className={selectedTab === 0 ? "tab selected-tab" : "tab"}
                        onClick={() => setSelectedTab(0)}>
                        <WeatherItem itemName={"Temperature"} itemIcon={temperature} />
                    </div>
                    <div className={selectedTab === 1 ? "tab selected-tab" : "tab"}
                        onClick={() => setSelectedTab(1)}>
                        <WeatherItem itemName={"Astronomy"} itemIcon={astronomy} />
                    </div>
                </div>
                <>
                    {selectedTab === 0 && <div className="temperature-content">
                        <WeatherItem itemName={"Min °C"} itemValue={`${landResponse.weather[0].mintempC}°C`} />
                        <WeatherItem itemName={"Max °C"} itemValue={`${landResponse.weather[0].maxtempC}°C`} />
                        <WeatherItem itemName={"Min °F"} itemValue={`${landResponse.weather[0].mintempC}°F`} />
                        <WeatherItem itemName={"Max °F"} itemValue={`${landResponse.weather[0].maxtempC}°F`} />
                        <WeatherItem itemName={"Average °C"} itemValue={`${landResponse.weather[0].avgtempC}°C`} />
                        <WeatherItem itemName={"Average °F"} itemValue={`${landResponse.weather[0].avgtempF}°F`} />
                        <WeatherItem itemName={"UV Index"} itemValue={`${landResponse.weather[0].uvIndex}`} />
                    </div>}
                    {selectedTab === 1 && <div className="astronomy-content">
                        <WeatherItem itemName={"Sunrise"} itemValue={landResponse.weather[0].astronomy[0].sunrise} />
                        <WeatherItem itemName={"Sunset"} itemValue={landResponse.weather[0].astronomy[0].sunset} />
                        <WeatherItem itemName={"Moonrise"} itemValue={landResponse.weather[0].astronomy[0].moonrise} />
                        <WeatherItem itemName={"Moonset"} itemValue={landResponse.weather[0].astronomy[0].moonset} />
                        <WeatherItem itemName={"Moon Phase"} itemValue={landResponse.weather[0].astronomy[0].moon_phase} />
                        <WeatherItem itemName={"Moon Illumination"} itemValue={landResponse.weather[0].astronomy[0].moon_illumination} />
                    </div>}
                </>
                <span className="date-container">
                    <img src={calendar} />
                    {landResponse.weather[0].date}
                </span>
            </CardBody>
        </Card>
    )
}
export default DailyForecast;