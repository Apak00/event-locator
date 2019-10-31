import React, { FC, useState } from "react";
import { TopBarProps, TopBarDispatchProps } from "./interfaces";
import { TopBarContainer, IconContainer } from "./styled";
import { Button, Icon } from "../../components";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { setLocationActionCreator } from "../actions";
import { mapInitialState } from "../reducer";
import { ACTIVITY_TAB, STORE_TAB } from "./constants";

const resetLocation = (setLocation: any) => () => {
  setLocation(mapInitialState);
};

const handleTabChange = (tab: string, setSelectedTab: any) => () => {
  setSelectedTab(tab);
};

const TopBar: FC<TopBarProps> = ({
  setLocation,
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
      <Button width="25%" onClick={resetLocation(setLocation)}>
        SPOR BUL
      </Button>
    </TopBarContainer>
  );
};

/**
 * Store Props that are bounded with TopBar
 */
const mapDispatchToProps: (dispatch: Dispatch) => TopBarDispatchProps = (
  dispatch: Dispatch
): TopBarDispatchProps =>
  bindActionCreators(
    {
      setLocation: setLocationActionCreator
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
