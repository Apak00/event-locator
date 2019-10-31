import { actionTypes, SetLocationAction } from "./actions";
import * as activities from "../enums/activities.json";
import { Activities, MapState } from "./interfaces";

export interface ActivityLocatorReducerState {
  activities: Activities;
  mapState: MapState;
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
  mapState: mapInitialState
};

export function activityLocatorReducer(
  state = initialState,
  action: SetLocationAction | any
) {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        mapState: action
      };
    default:
      return state;
  }
}
