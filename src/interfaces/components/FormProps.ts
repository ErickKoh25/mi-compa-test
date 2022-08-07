import { PositionProps } from "./GoogleMap"

export interface FormProps {
    idAddress: string
    editAddress: boolean
    setCoords?: Function
    coords?: PositionProps
    initValues: initialProps
}

export interface initialProps {
    _id?: string
    street: string
    external_number: string
    internal_number: string
    zipcode: string
    settlement: string
    municipality: string
    city: string
    state: string
    country: string
    coords: string[] | number[]
}

export interface arrayContentProps {
    data: Array<initialProps>
}