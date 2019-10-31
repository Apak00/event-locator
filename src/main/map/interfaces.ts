import { Activities } from "../interfaces";

export interface MapProps extends MapStateProps {
  activities: Activities;
}
export interface MapStateProps {
  center: GoogleMapCenter;
  zoom: number;
}

export interface GoogleMapCenter {
  lat: number;
  lng: number;
}
