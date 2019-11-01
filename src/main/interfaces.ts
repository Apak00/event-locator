import * as activities from "../enums/activities.json";

export interface MainStateProps {
  activities: Activities;
  currentActivity?: Activity;
}

export interface MainProps extends MainStateProps {}

export type Activities = typeof activities.Data;
export type Activity = Activities[0];

export interface MapState {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}
