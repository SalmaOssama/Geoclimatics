import React, { FC } from "react";
import useLandingDisplay from './hooks/useLandingDisplay'
import Loader from '../../components/Loader/index'
import { HourlyData, LandingDisplayProps } from './index.interface'
import CurrentCondition from './partials/CurrentCondition/index'
import DailyForecast from './partials/DailyForecast/index'
import HourlyForecast from "./partials/HourlyForecast";
const LandingDisplay: FC<LandingDisplayProps> = ({ userLocation }) => {
    const { landResponse } = useLandingDisplay(userLocation)
    if (userLocation && landResponse)
        return (
            <div className="landing-display-content-container">
                <CurrentCondition cardTitle={'CurrentCondition'} location={userLocation.country_name} response={landResponse} />
                <DailyForecast landResponse={landResponse}/>
                <HourlyForecast landResponse={landResponse}/>
            </div>
        )
    return (<Loader />)
}
export default LandingDisplay;