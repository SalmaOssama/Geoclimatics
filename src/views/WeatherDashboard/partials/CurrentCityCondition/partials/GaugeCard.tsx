import React, { FC } from "react";
import Gauge from "../../../../../components/Gauge";
import { GaugeCardProps } from '../index.interface'
const GaugeCard: FC<GaugeCardProps> = ({ icon, title, value, angle, fill }) => {
    return (
        <div className="gauge-card">
            <div className="gauge-card-header">
                <div>{title}</div>
                <img src={icon} />
            </div>
            <div className="gauge-card-body">
                <Gauge value={value} angle={angle} color={fill} />
            </div>
        </div>
    )
}
export default GaugeCard;