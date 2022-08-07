
export interface PositionProps {
    lat: Function | number | google.maps.LatLng
    lng: Function | number | google.maps.LatLng
}
export interface MarkerProps {
    lat: google.maps.LatLng | google.maps.LatLngLiteral
    lng: google.maps.LatLng | google.maps.LatLngLiteral
}

export interface OptionsMapsProps {
    gestureHandling: string | string[],
    zoomControl: boolean,
    mapTypeControl: boolean,
}

export interface GoogleMapProps {
    options: OptionsMapsProps
    readOnly?: boolean
    setSearchAddress?: Function
    setCoords: Function
    staticCoords: PositionProps
}