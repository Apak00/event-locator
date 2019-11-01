import React, { FC, useState } from "react";
import { TopBarProps, TopBarDispatchProps } from "./interfaces";
import { TopBarContainer, IconContainer } from "./styled";
import { Button, Icon, Text } from "../../components";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {
  setLocationActionCreator,
  setCurrentActivityActionCreator
} from "../actions";
import { mapInitialState } from "../reducer";
import { ACTIVITY_TAB, STORE_TAB } from "./constants";

const resetLocation = (setLocation: any, setCurrentActivity: any) => () => {
  setCurrentActivity(undefined);
  setLocation(mapInitialState);
};

const handleTabChange = (tab: string, setSelectedTab: any) => () => {
  setSelectedTab(tab);
};

const TopBar: FC<TopBarProps> = ({
  setLocation,
  setCurrentActivity,
  ...props
}: TopBarProps): JSX.Element => {
  const [selectedTab, setSelectedTab]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState(ACTIVITY_TAB);

  return (
    <TopBarContainer>
      <IconContainer selectedTab={selectedTab}>
        <div onClick={handleTabChange(ACTIVITY_TAB, setSelectedTab)}>
          <Icon
            width={"30px"}
            height={"30px"}
            name={"activity-side-menu-button"}
          />
        </div>
        <div onClick={handleTabChange(STORE_TAB, setSelectedTab)}>
          <Icon
            width={"30px"}
            height={"30px"}
            name={"store-side-menu-button"}
          />
        </div>
      </IconContainer>
      <Button
        width="18.75%"
        onClick={resetLocation(setLocation, setCurrentActivity)}
      >
        <Text fontSize={18}>SPOR BUL</Text>
      </Button>
    </TopBarContainer>
  );
};

/**
 * Store Dispatch Props that are bounded with TopBar
 */
const mapDispatchToProps: (dispatch: Dispatch) => TopBarDispatchProps = (
  dispatch: Dispatch
): TopBarDispatchProps =>
  bindActionCreators(
    {
      setLocation: setLocationActionCreator,
      setCurrentActivity: setCurrentActivityActionCreator
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
