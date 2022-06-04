import { City } from "../../views/LandingDisplay/index.interface"

export interface HeaderProps{
    setUserLocation:Function
}

export interface AllCitiesResponse{
    data:City[];
    links:Object[];
    metadata:Object
}