import { MapState, Activity } from "./interfaces";

export enum actionTypes {
  SET_LOCATION = "[Activity Locator] Set Location",
  SET_CURRENT_ACTIVITY = "[Activity Locator] Set Current Activity"
}

export interface SetLocationAction extends MapState {
  type: actionTypes.SET_LOCATION;
}

export function setLocationActionCreator({
  center: { lat, lng },
  zoom
}: MapState): SetLocationAction {
  return {
    type: actionTypes.SET_LOCATION,
    center: { lat, lng },
    zoom
  };
}

export interface SetCurrentActivityAction {
  type: actionTypes.SET_CURRENT_ACTIVITY;
  currentActivity: Activity;
}

export function setCurrentActivityActionCreator(
  currentActivity: Activity
): SetCurrentActivityAction {
  return {
    type: actionTypes.SET_CURRENT_ACTIVITY,
    currentActivity
  };
}
