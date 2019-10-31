import styled from "styled-components";
import React from "react";
import { ACTIVITY_TAB } from "./constants";

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: rgb(246, 246, 246);
  overflow: hidden;
  button {
    background-color: black;
    transform: skewX(-10deg) translateX(10px);
  }
`;

export const IconContainer = styled(({ selectedTab, ...props }) => (
  <div {...props} />
))`
  width: 25%;
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #ffffff;
    :nth-child(2n + ${props => (props.selectedTab === ACTIVITY_TAB ? 1 : 0)}) {
      background-color: #ffe843;
    }
  }
`;
