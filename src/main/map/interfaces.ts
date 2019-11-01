import { Activities, Activity } from "../interfaces";

export interface MapProps extends MapStateProps {
  activities: Activities;
}
export interface MapStateProps {
  center: GoogleMapPosition;
  zoom: number;
  currentActivity: Activity;
}

export interface GoogleMapPosition {
  lat: number;
  lng: number;
}
