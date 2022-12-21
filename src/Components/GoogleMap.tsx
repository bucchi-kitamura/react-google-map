import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import React, { FC } from "react";
import { useMap } from "./useMap";
import { InterfaceMap } from "./GoogleMapStyles";

type Props = {
  defaultPosition: {
    lat: number;
    lng: number;
  };
};

const GoogleMap: FC<Props> = (props) => {
  const { isLoaded, onLoad, zoom } = useMap({
    defaultPosition: props.defaultPosition,
  });

  const containerStyle = {
    width: "100vw",
    height: "75vh",
  };

  const googleMapOptions = {
    styles: InterfaceMap,
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent
          options={googleMapOptions}
          zoom={zoom}
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
        ></GoogleMapComponent>
      ) : (
        "loading"
      )}
    </>
  );
};

export default React.memo(GoogleMap);
