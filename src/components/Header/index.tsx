import React, { useState, FC } from "react";
import useHeader from "./hooks/useHeader";
import { City } from '../../views/LandingDisplay/index.interface';
import Loader from "../Loader/index";
import { header_icon, location_pin, next_arrow } from "../../assets/icons";
import { HeaderProps } from './index.interface'
import { useLocation } from 'react-router-dom'

const Header: FC<HeaderProps> = ({ setUserLocation }) => {
    const { locationCities, handleCitySelection } = useHeader(setUserLocation)
    const [showList, setShowList] = useState(false);
    const [showThemeList, setShowThemeList] = useState(false);
    const location = useLocation();
    const updateTheme = (theme: string) => document.documentElement.className = theme;

    function handleThemeChange(theme: string) {
        updateTheme(theme)
        localStorage.setItem('theme', theme)
    }
    if (!locationCities)
        return (<Loader />)
    return (
        <div className="header-container">
            <span className='header-title'>
                <span className="header-icon">{header_icon}</span>
                Geoclimatics
            </span>
            <div className="dropdown-wrapper">
                <div className="dropdown-container">
                    <button className="drop-down-button" onClick={() => { setShowThemeList(!showThemeList) }}>
                        <span className="drop-down-title">
                            Change Theme
                            <span className={showThemeList ? "arrow show" : "arrow"}>{next_arrow}</span>
                        </span>
                        {showThemeList && <ul className="drop-down-content">
                            <li className={localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme') ? 'selected' : ""} onClick={() => handleThemeChange('dark')}>Dark</li>
                            <li className={localStorage.getItem('theme') === 'light' ? 'selected' : ""} onClick={() => handleThemeChange('light')}>Light</li>
                        </ul>}
                    </button>

                </div>
                {location.pathname === '/' && <div className="dropdown-container">
                    <button className="drop-down-button" onClick={() => { setShowList(!showList) }}>
                        <span className="drop-down-title">
                            <span className="location-pin">{location_pin}</span>
                            Select City
                            <span className={showList ? "arrow show" : "arrow"}>{next_arrow}</span>
                        </span>
                        {showList && <ul className="drop-down-content">
                            {locationCities.map((city: City) =>
                                <li key={city.name} onClick={() => handleCitySelection(city)}>
                                    {city.name}
                                </li>
                            )}
                        </ul>}
                    </button>

                </div>}
            </div>
        </div>)
}
export default Header;