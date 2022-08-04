import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  MarkerF
} from "@react-google-maps/api";
import { env } from "../../config/config";
import {
  PositionProps,
  GoogleMapProps
} from "../../interfaces/components/GoogleMap";

const GoogleMapComponent = ({ options, readOnly, setSearchAddress, setCoords, staticCoords }:GoogleMapProps) => {
  const [center, setCenter] = useState<PositionProps>(staticCoords); // state for the center position on the map
  const [zoom] = useState(16); // state for zoom on the map
  const [marker, setMarker] = useState<PositionProps>(staticCoords); // state for marker position on the map
  const [libraries] = useState(["places"]); // libraries to load on google map
  const mapRef = useRef<any>(); // constant for the map instance
  const searchRef = useRef<any>(); // constant for the searchbox of places
  const stylesMap = { height: "100%" }; // styles for map
  const onMapLoad = (map: any) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (staticCoords && staticCoords.lat && staticCoords.lng) {
      setCenter(staticCoords);
    }
  }, [staticCoords]);

  const onSearchBoxLoad = (sb: any) => {
    // initial function to get the Search Box instance
    searchRef.current = sb; // assignament of Search Box instance in the searchReaf
  };

  const onGetPosition = (obj: PositionProps) => {
    if (typeof obj.lat === "function" && typeof obj.lng === "function") {
      return { lat: obj.lat(), lng: obj.lng() };
    }
  };

  const onPlacesChanged = () => {
    // function to update the marker and center when a place has been selected in the search box
    const results = searchRef.current.getPlaces(); // get the selected place
    const position = results.map((place: any) => {
      if(setSearchAddress){
        setSearchAddress(place)
      }
      return onGetPosition(place.geometry.location); // get updated position: ;
    });
    setMarker(position[0]); // set the new position for the marker
    setCenter(position[0]); // set the new position for map centering
    setCoords(position[0]); // set the new position for the inputs
  };

  const onBoundsChanged = () => {
    // function to update the marker when the map boundaries have been updated
    const position = onGetPosition(mapRef.current.getCenter()); // get updated position
    if (position) {
      setMarker(position); // set the new position for the marker
    }
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={env.mapsApiKey} libraries={libraries}>
        <GoogleMap
          mapContainerStyle={stylesMap}
          center={center}
          zoom={zoom}
          onLoad={(map:any) => onMapLoad(map)} // The function is executed when the map is initialized
          onBoundsChanged={onBoundsChanged} // Executed everytime the bounds of the map change.
          options={options}
          onDragEnd={() => setCoords(marker)}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {!readOnly && (
            <StandaloneSearchBox
              onLoad={(sb:any) => onSearchBoxLoad(sb)} // Executed when the Standalone is initialized
              onPlacesChanged={onPlacesChanged} // Executed everytime when a place has been selected.
            >
              <input className="input-search-box" type="text" placeholder="Buscar Dirección..." />
            </StandaloneSearchBox>
          )}

          <MarkerF position={marker} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
