import {
  GoogleMap as GoogleMapComponent,
  InfoBoxF,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import React, { FC } from "react";
import { useMap } from "./useMap";
import { Text } from "@chakra-ui/react";

type Props = {
  defaultPosition: {
    lat: number;
    lng: number;
  };
};

const InfoWindowOnGoogleMap: FC<Props> = (props) => {
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
        <GoogleMapComponent mapContainerStyle={containerStyle} onLoad={onLoad}>
          <InfoWindowF position={props.defaultPosition}>
            <>
              <Text
                fontSize={16}
                as={"p"}
                align={"center"}
                fontWeight={"bold"}
                color={"green.400"}
              >
                会社のロゴ
              </Text>
              <img
                width="150px"
                src="https://miraito-inc.co.jp/images/fix_logomark_A_flat%20.png"
                alt=""
              />
            </>
          </InfoWindowF>
        </GoogleMapComponent>
      ) : (
        "loading"
      )}
    </>
  );
};

export default React.memo(InfoWindowOnGoogleMap);
