import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import React, { FC } from "react";
import { useMap } from "./useMap";

type Props = {
  defaultPosition: {
    lat: number;
    lng: number;
  };
};

const GoogleMap: FC<Props> = (props) => {
  const { isLoaded, onLoad } = useMap({
    defaultPosition: props.defaultPosition,
  });

  const containerStyle = {
    width: "100vw",
    height: "75vh",
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent
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
