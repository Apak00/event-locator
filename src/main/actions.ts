import { MapState } from "./interfaces";

export enum actionTypes {
  SET_LOCATION = "[Activity Locator] Set Location"
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
