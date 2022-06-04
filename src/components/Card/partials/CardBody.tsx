import React from "react";
import {CardProps} from '../index.interface'
const CardBody = ({children}:CardProps) => {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}
export default CardBody;