import React, { FC } from "react";
import { MainContainer, ActivityMapContainer } from "./styled";
import Map from "./map";
import SideBar from "./side-bar";
import TopBar from "./top-bar";
import { connect, MapStateToProps } from "react-redux";
import { GlobalState } from "../store";
import { MainStateProps, MainProps } from "./interfaces";

const Main: FC<MainProps> = props => {
  return (
    <MainContainer>
      <TopBar />
      <ActivityMapContainer>
        <SideBar activities={props.activities} />
        <Map activities={props.activities} />
      </ActivityMapContainer>
    </MainContainer>
  );
};

/**
 * Represents mapStateToProps
 *
 * @param {GlobalState} state
 */
const mapStateToProps: MapStateToProps<MainStateProps, any, GlobalState> = (
  state: GlobalState
): MainStateProps => ({
  // We could use a selector library like 'reselect' here
  activities: state.activities
});

export default connect(mapStateToProps)(Main);