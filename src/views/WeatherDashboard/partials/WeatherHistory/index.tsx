import React, { FC } from "react";
import CardHeader from "../../../../components/Card/partials/CardHeader";
import CardBody from "../../../../components/Card/partials/CardBody";
import Card from "../../../../components/Card/index";
import Table from "../../../../components/Table/index";
import { formatTime } from "../../../../services/formatters/timeFormatter";
import { HistoricalWeatherResponse } from "../../index.interface";
const WeatherHistory: FC<HistoricalWeatherResponse> = ({ data }) => {

    let historyData = data.weather[0].hourly
    let tableColumns = [
        { Header: "Time", accessor: "time", Cell: ({ value }: { value: string | undefined }) => formatTime(value!) },
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
                Yesterday's Weather
            </CardHeader>
            <CardBody>
                <Table tableData={historyData} tableColumns={tableColumns} />
            </CardBody>
        </Card>
    )
}
export default WeatherHistory;