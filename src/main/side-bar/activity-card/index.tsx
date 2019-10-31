import React from "react";
import { ActivityCardProps, ActivityCardDispatchProps } from "./interfaces";
import {
  ActivityCardContainer,
  ImageContainer,
  ActivityDetails
} from "./styled";
import { Text, Button } from "../../../components";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { setLocationActionCreator } from "../../actions";
import { MapState } from "../../interfaces";

const changeLocation = (newMapState: MapState, setLocation: any) => () => {
  setLocation(newMapState);
};

const ActivityCard = ({
  activityInfo,
  setLocation,
  ...props
}: ActivityCardProps) => {
  const locationOfActivity: MapState = {
    center: {
      lat: parseFloat(activityInfo.ActivityLat),
      lng: parseFloat(activityInfo.ActivityLng)
    },
    zoom: 16
  };
  return (
    <ActivityCardContainer>
      <ImageContainer
        url={`https://platform.decathlon.com.tr:3161/${activityInfo.MainImageUrl}`}
      />
      <ActivityDetails>
        <Text fontWeight={"bold"} fontSize={14} color={"#212121"}>
          {activityInfo.ActivityName}
        </Text>
        <Text fontSize={13} color={"#8d8d8d"}>
          {activityInfo.ActivityName}
        </Text>
        <Text fontWeight={"light"} color={"#666666"}>
          {activityInfo.Address}
        </Text>
      </ActivityDetails>
      <Button onClick={changeLocation(locationOfActivity, setLocation)}>
        <Text
          css={{
            transform: "skewX(10deg)",
            padding: "10px 20px"
          }}
          fontSize={12}
        >
          ETKİNLİK DETAYLARI
        </Text>
      </Button>
    </ActivityCardContainer>
  );
};

/**
 * Store Props that are bounded with ActivityCard
 */
const mapDispatchToProps: (dispatch: Dispatch) => ActivityCardDispatchProps = (
  dispatch: Dispatch
): ActivityCardDispatchProps =>
  bindActionCreators(
    {
      setLocation: setLocationActionCreator
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ActivityCard);
