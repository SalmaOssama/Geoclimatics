import React, { FC } from "react";
import CardHeader from "../../../../components/Card/partials/CardHeader";
import CardBody from "../../../../components/Card/partials/CardBody";
import Card from "../../../../components/Card/index";
import Table from "../../../../components/Table/index";

import { formatTime } from "../../../../services/formatters/timeFormatter";
import {LandWeatherDataResponse} from '../../../LandingDisplay/index.interface'
const TodaysWeather: FC<LandWeatherDataResponse> = ({ data }) => {

    let hourlyData = data.weather[0].hourly
    let tableColumns = [
        { Header: "Time", accessor: "time" ,Cell: ({value}:{value:string|undefined})=>formatTime(value!)},
        { Header: "Temperature °C", accessor: "tempC" },
        { Header: "Temperature °F", accessor: "tempF" },
        { Header: "Feels like °C", accessor: "FeelsLikeC" },
        { Header: "Feels like °F", accessor: "FeelsLikeF" },
        { Header: "Humidity", accessor: "humidity" },
        { Header: "Rain Chance", accessor: "chanceofrain" },
        { Header: "Visibility", accessor: "visibility" },
        { Header: "UV Index", accessor: "uvIndex" }
    ]
    return (
        <Card className="todays-weather-container">
            <CardHeader>
                Today's Weather
            </CardHeader>
            <CardBody>
                <Table tableData={hourlyData} tableColumns={tableColumns}/>
            </CardBody>
        </Card>
    )
}
export default TodaysWeather;