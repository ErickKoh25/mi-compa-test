export const geocoder = (latlng: google.maps.LatLng | google.maps.LatLngLiteral) => {
    const geocoder = new google.maps.Geocoder();
    return geocoder.geocode({ location: latlng });
}