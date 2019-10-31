import { Activity, MapState } from "../../interfaces";
import { SetLocationAction } from "../../actions";

export interface ActivityCardProps extends ActivityCardDispatchProps {
  activityInfo: Activity;
}
export interface ActivityCardDispatchProps {
  setLocation(newMapState: MapState): SetLocationAction;
}
