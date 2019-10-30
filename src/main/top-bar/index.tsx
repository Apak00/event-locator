import React from "react";
import { TopBarProps } from "./interfaces";
import { TopBarContainer } from "./styled";
import { Button } from "../../components";

const TopBar = (props: TopBarProps) => (
  <TopBarContainer>
    TopBar
    <Button width="25%">SPOR BUL</Button>
  </TopBarContainer>
);

export default TopBar;
