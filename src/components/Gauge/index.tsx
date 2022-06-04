import React,{FC} from "react";
import {GaugeProps} from './index.interface'
const Gauge:FC<GaugeProps> = ({value,angle,color}) => {
    return (
        <div className="gauge" style={{"--percentage":angle,"--fill":color}as React.CSSProperties}>
            <span>{value}</span>  
        </div>
    )
}
export default Gauge