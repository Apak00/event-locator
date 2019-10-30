export enum actionTypes {
  SET_LOCATION = "[Activity Locator] Set Location"
}

export interface SetLocationAction {
  type: actionTypes.SET_LOCATION;
  altitude: string;
  longtitude: string;
}

export function setLocationActionCreator({
  altitude,
  longtitude
}: SetLocationAction): SetLocationAction {
  return {
    type: actionTypes.SET_LOCATION,
    altitude,
    longtitude
  };
}
