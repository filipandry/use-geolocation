## Guide

### Properties
#### Position
| Prop      | Type    | Nullable |
|-----------|---------|----------|
| coords    | ICoords | []       |
| timestamp | date    | []       |
| cityName  | string  | [x]      |

#### ICoords
| Prop             | Type    | Nullable |
|------------------|---------|----------|
| latitude         | number | []       |
| lognitude        | number | []       |
| accuracy         | number | []      |
| altitude         | number | [x]      |
| altitudeAccuracy | number | [x]      |
| heading          | number | [x]      |
| speed            | number | [x]      |

### Usage
```js
import React from "react";
import { useGeolocation } from "@f.muresan/use-geolocation";

export default function App() {
  const position = useGeolocation();
  return (
    <div className="App">
      <p>Latitude: {position?.coords.latitude}</p>
      <p>Longitude: {position?.coords.longitude}</p>
      <p>Accuracy: {position?.coords.accuracy}</p>
      <p>Altitude: {position?.coords.altitude}</p>
      <p>Altitude accuracy: {position?.coords.altitudeAccuracy}</p>
      <p>Heading: {position?.coords.heading}</p>
      <p>Speed: {position?.coords.speed}</p>
      <p>Timestamp: {position?.timestamp}</p>
      <p>City: {position?.cityName}</p>
    </div>
  );
}
```