import { useEffect, useState } from "react";

interface ICords {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}
interface IPosition {
  coords: ICords;
  timestamp: number;
  cityName?: string | null;
}

export const useGeolocation = () => {
  const [position, setPosition] = useState<IPosition | null>(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: IPosition) => {
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=it`
        )
          .then((res) => res.json())
          .then((data) => {
            position.cityName = data.city;
            setPosition(position);
            //setCityName(data.city);
          });
      });
    }
  }, []);

  return position;
};
