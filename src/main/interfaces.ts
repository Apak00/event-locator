import * as activities from "../enums/activities.json";

export interface MainStateProps {
  activities: Activities;
}

export interface MainProps extends MainStateProps {}

export type Activities = typeof activities.Data;
export type Activity = Activities[0];
