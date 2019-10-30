import { actionTypes, SetLocationAction } from "./actions";
import * as activities from "../enums/activities.json";
import { Activities } from "./interfaces";

export interface ActivityLocatorReducerState {
  activities: Activities;
  altitude: string;
  longtitude: string;
}

const initialState: ActivityLocatorReducerState = {
  activities: activities.Data,
  altitude: "",
  longtitude: ""
};

export function activityLocatorReducer(
  state = initialState,
  action: SetLocationAction | any
) {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        altitude: action.altitude,
        longtitude: action.longtitude
      };
    default:
      return state;
  }
}
