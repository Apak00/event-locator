import React from "react";
import { SideBarProps } from "./interfaces";
import { SideBarContainer } from "./styled";
import ActivityCard from "./activity-card";

const SideBar = (props: SideBarProps) => (
  <SideBarContainer>
    {props.activities.map(activity => (
      <ActivityCard key={activity.Id} activityInfo={activity} />
    ))}
  </SideBarContainer>
);

export default SideBar;
