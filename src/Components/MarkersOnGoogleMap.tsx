import {
  GoogleMap as GoogleMapComponent,
  MarkerF,
} from "@react-google-maps/api";
import React, { FC } from "react";
import { useMap } from "./useMap";

type Props = {
  defaultPosition: {
    lat: number;
    lng: number;
  };
};

const MarkersOnGoogleMap: FC<Props> = (props) => {
  const { isLoaded, onLoad } = useMap({
    defaultPosition: props.defaultPosition,
  });

  const containerStyle = {
    width: "100vw",
    height: "75vh",
  };

  const markerLabel: google.maps.MarkerLabel = {
    text: "ミライトデザイン",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontWeight: "bold",
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent mapContainerStyle={containerStyle} onLoad={onLoad}>
          <MarkerF
            position={props.defaultPosition}
            label={markerLabel}
          ></MarkerF>
        </GoogleMapComponent>
      ) : (
        "loading"
      )}
    </>
  );
};

export default React.memo(MarkersOnGoogleMap);
