import { WeatherData } from "../LandingDisplay/index.interface"
export interface HistoricalWeatherResponse {
    data: { request: Object[], weather: WeatherData[] }
    theme?:string
}
