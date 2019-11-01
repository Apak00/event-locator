import React, { FC } from "react";
import { MainContainer, ActivityMapContainer } from "./styled";
import Map from "./map";
import SideBar from "./side-bar";
import TopBar from "./top-bar";
import { connect, MapStateToProps } from "react-redux";
import { GlobalState } from "../store";
import { MainStateProps, MainProps } from "./interfaces";

const Main: FC<MainProps> = ({ currentActivity, activities }) => {
  return (
    <MainContainer>
      <TopBar />
      <ActivityMapContainer>
        <SideBar activities={activities} currentActivity={currentActivity} />
        <Map activities={activities} />
      </ActivityMapContainer>
    </MainContainer>
  );
};

/**
 * Store Action Props that are bounded with Main
 *
 * @param {GlobalState} state
 */
const mapStateToProps: MapStateToProps<MainStateProps, any, GlobalState> = (
  state: GlobalState
): MainStateProps => ({
  // We could use a selector library like 'reselect' here
  activities: state.activities,
  currentActivity: state.currentActivity
});

export default connect(mapStateToProps)(Main);
