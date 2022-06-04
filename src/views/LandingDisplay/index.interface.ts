export interface Location {
    IPv4: string
    city: string
    country_code: string
    country_name: string
    latitude: number
    longitude: number
    state: string
}

export interface City {
    city: string
    country: string
    countryCode: string
    distance: number
    id: number
    latitude: number
    longitude: number
    name: string
    population: number
    region: string
    regionCode: string
    type: string
    wikiDataId: string
}

export interface LandWeatherDataResponse {
    data: LandWeatherData
}

export interface LandWeatherData {
    ClimateAverages: Object[]
    current_condition: CurrentConditionData[]
    request: Object[]
    weather: WeatherData[]
}

export interface WeatherData {
    astronomy: AstronomyData[]
    avgtempC: string
    avgtempF: string
    date: string
    hourly: HourlyData[]
    maxtempC: string
    maxtempF: string
    mintempC: string
    mintempF: string
    sunHour: string
    totalSnow_cm: string
    uvIndex: string
}

interface AstronomyData {
    moon_illumination: string
    moon_phase: string
    moonrise: string
    moonset: string
    sunrise: string
    sunset: string
}

export interface HourlyData {
    DewPointC: string
    DewPointF: string
    FeelsLikeC: string
    FeelsLikeF: string
    HeatIndexC: string
    HeatIndexF: string
    WindChillC: string
    WindChillF: string
    WindGustKmph: string
    WindGustMiles: string
    chanceoffog: string
    chanceoffrost: string
    chanceofhightemp: string
    chanceofovercast: string
    chanceofrain: string
    chanceofremdry: string
    chanceofsnow: string
    chanceofsunshine: string
    chanceofthunder: string
    chanceofwindy: string
    cloudcover: string
    humidity: string
    precipInches: string
    precipMM: string
    pressure: string
    pressureInches: string
    tempC: string
    tempF: string
    time: string
    uvIndex: string
    visibility: string
    visibilityMiles: string
    weatherCode: string
    weatherDesc: { value: string }[]
    weatherIconUrl: { value: string }[]
    winddir16Point: string
    winddirDegree: string
    windspeedKmph: string
    windspeedMiles: string
}

export interface CurrentConditionData {
    FeelsLikeC: string
    FeelsLikeF: string
    cloudcover: string
    humidity: string
    observation_time: string
    precipInches: string
    precipMM: string
    pressure: string
    pressureInches: string
    temp_C: string
    temp_F: string
    uvIndex: string
    visibility: string
    visibilityMiles: string
    weatherCode: string
    weatherDesc: { value: string }[]
    weatherIconUrl: { value: string }[]
    winddir16Point: string
    winddirDegree: string
    windspeedKmph: string
    windspeedMiles: string
}

export interface LandingDisplayProps {
    userLocation: Location | undefined

}

export interface CurrentConditionProps {
    location: string
    response: LandWeatherData
    cardTitle: string
}

export interface ForecastProps {
    landResponse: LandWeatherData
}