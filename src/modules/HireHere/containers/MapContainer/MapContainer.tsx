import React from "react";
import { GoogleMapComponent } from "../../../../components/GoogleMapComponent";

const MapContainer = ({coords, setCoords, readOnly,setSearchAddres}:any) => {
  return (
    <div>
      <GoogleMapComponent
        options={{
          gestureHandling: "none",
          zoomControl: true,
          mapTypeControl: false,
        }}
        readOnly={readOnly}
        setSearchAddress = {setSearchAddres}
        setCoords={setCoords}
        staticCoords={coords}
      />
    </div>
  );
};

export default MapContainer;
