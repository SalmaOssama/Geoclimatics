import React from "react";
import {CardProps} from '../index.interface'
const CardHeader = ({children}:CardProps) => {
    return (
        <div className="card-header">
            {children}
        </div>
    )
}
export default CardHeader;