import React from "react";
import { SideBarProps } from "./interfaces";
import { SideBarContainer } from "./styled";
import ActivityCard from "./activity-card";

const SideBar = (props: SideBarProps) => (
  <SideBarContainer>
    {props.activities.map(item => (
      <ActivityCard activityInfo={item} />
    ))}
  </SideBarContainer>
);

export default SideBar;
