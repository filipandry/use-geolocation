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
export declare const useGeolocation: () => IPosition | null;
export {};
