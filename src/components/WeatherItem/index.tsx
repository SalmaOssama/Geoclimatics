import React, { FC } from "react";
import { WeatherItemProps } from "./index.interface";
const WeatherItem: FC<WeatherItemProps> = ({ itemName, itemIcon, itemValue }) => {
    return (
        <div className="weather-item-container">
            <div className="weather-item-header">
                {itemIcon && <img src={itemIcon} />}
                <span>{itemName}</span>
            </div>
            {itemValue && <div className="weather-item-value">{itemValue}</div>}
        </div>
    )
}
export default WeatherItem;