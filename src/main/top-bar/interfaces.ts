import { SetLocationAction } from "../actions";
import { MapState } from "../interfaces";

export interface TopBarProps extends TopBarDispatchProps {}
export interface TopBarDispatchProps {
  setLocation(mapState: MapState): SetLocationAction;
}
