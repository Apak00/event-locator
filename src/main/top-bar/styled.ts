import styled from "styled-components";

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
