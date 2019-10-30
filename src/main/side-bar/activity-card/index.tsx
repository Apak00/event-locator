import React from "react";
import { ActivityCardProps } from "./interfaces";
import { ActivityCardContainer } from "./styled";

const ActivityCard = (props: ActivityCardProps) => (
  <ActivityCardContainer>
    {props.activityInfo.ActivityName}
  </ActivityCardContainer>
);

export default ActivityCard;
