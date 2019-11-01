import React, { FC } from "react";
import { SideBarProps } from "./interfaces";
import { SideBarContainer } from "./styled";
import ActivityCard from "./activity-card";
import ActivityDetail from "./activity-detail";

const SideBar: FC<SideBarProps> = ({
  activities,
  currentActivity
}: SideBarProps) => (
  <SideBarContainer>
    {currentActivity ? (
      <ActivityDetail currentActivity={currentActivity} />
    ) : (
      activities.map(activity => (
        <ActivityCard key={activity.Id} activityInfo={activity} />
      ))
    )}
  </SideBarContainer>
);

export default SideBar;
