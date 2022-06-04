import React from "react";
import {CardProps} from './index.interface'
const CardHeader = ({children,className,style}:CardProps) => {
    return (
        <div className={`card ${className}`} style={style}>
            {children}
        </div>
    )
}
export default CardHeader;