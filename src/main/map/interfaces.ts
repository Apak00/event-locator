import { Activities, Activity } from "../interfaces";

export interface MapProps extends MapStateProps {
  activities: Activities;
}
export interface MapStateProps {
  center: GoogleMapCenter;
  zoom: number;
  currentActivity: Activity;
}

export interface GoogleMapCenter {
  lat: number;
  lng: number;
}
