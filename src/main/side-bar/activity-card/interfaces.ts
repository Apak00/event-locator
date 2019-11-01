import { Activity, MapState } from "../../interfaces";
import { SetLocationAction, SetCurrentActivityAction } from "../../actions";

export interface ActivityCardProps extends ActivityCardDispatchProps {
  activityInfo: Activity;
}
export interface ActivityCardDispatchProps {
  setLocation(newMapState: MapState): SetLocationAction;
  setCurrentActivity(currentActivity: Activity): SetCurrentActivityAction;
}
