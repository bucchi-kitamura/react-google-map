import { useJsApiLoader } from "@react-google-maps/api";
import { googleMapsApiKey } from "./env";
import { useEffect, useState } from "react";

export type Map = google.maps.Map;

type Props = {
  defaultPosition: google.maps.LatLngLiteral;
};

export const useMap = ({ defaultPosition }: Props) => {
  // googleMapsApiKeyは自分で取得したものに差し替えてください
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey,
  });

  const [map, setMap] = useState<Map | null>(null);
  const [zoom, setZoom] = useState<number>(12);

  // https://github.com/JustFly1984/react-google-maps-api/issues/3113#issuecomment-1359589006
  useEffect(() => {
    setTimeout(() => {
      setZoom(14);
    }, 100);
  }, []);

  const onLoad = (map: Map) => {
    const bounds = new window.google.maps.LatLngBounds(defaultPosition);
    map.fitBounds(bounds);
    setMap(map);
  };

  return { map, isLoaded, onLoad, zoom };
};
