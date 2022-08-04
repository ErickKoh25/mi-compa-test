import React from "react";
import GoogleMap from "../../../../components/GoogleMap";

const MapContainer = ({coords, setCoords, readOnly,setSearchAddres}:any) => {
  return (
    <div>
      <GoogleMap
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
