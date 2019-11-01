import { actionTypes, SetLocationAction } from "./actions";
import * as activities from "../enums/activities.json";
import { Activities, MapState, Activity } from "./interfaces";

export interface ActivityLocatorReducerState {
  activities: Activities;
  mapState: MapState;
  currentActivity?: Activity;
}
export const mapInitialState = {
  center: {
    lat: 40,
    lng: 29
  },
  zoom: 6
};
const initialState: ActivityLocatorReducerState = {
  activities: activities.Data,
  mapState: mapInitialState,
  currentActivity: undefined
};

export function activityLocatorReducer(
  state = initialState,
  action: SetLocationAction | any
) {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        mapState: { center: action.center, zoom: action.zoom }
      };
    case actionTypes.SET_CURRENT_ACTIVITY:
      return {
        ...state,
        currentActivity: action.currentActivity
      };
    default:
      return state;
  }
}
