import React, { FC } from "react";
import { ActivityDetailProps } from "./interfaces";
import {
  ActivityCardContainer,
  ImageContainer,
  ActivityDetails
} from "./styled";
import { Text } from "../../../components";

const ActivityDetail: FC<ActivityDetailProps> = ({
  currentActivity,
  ...props
}: ActivityDetailProps) => {
  return (
    <ActivityCardContainer name={"currentActivity"}>
      <ImageContainer
        url={`https://platform.decathlon.com.tr:3161/${currentActivity.MainImageUrl}`}
      />
      <ActivityDetails>
        <Text fontWeight={"bold"} fontSize={14} color={"#212121"}>
          {currentActivity.ActivityName}
        </Text>
        <Text fontSize={13} color={"#8d8d8d"}>
          {currentActivity.ActivityName}
        </Text>
        <Text fontWeight={"light"} color={"#666666"}>
          {currentActivity.Address}
        </Text>
      </ActivityDetails>
    </ActivityCardContainer>
  );
};

export default ActivityDetail;
