import { SetLocationAction, SetCurrentActivityAction } from "../actions";
import { MapState } from "../interfaces";

export interface TopBarProps extends TopBarDispatchProps {}
export interface TopBarDispatchProps {
  setLocation(mapState: MapState): SetLocationAction;
  setCurrentActivity(currentActivity: any): SetCurrentActivityAction;
}
