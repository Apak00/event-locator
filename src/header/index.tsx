import React from "react";
import { HeaderContainer } from "./styled";
import { Text } from "../components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Text color={"black"}>HEADER</Text>
    </HeaderContainer>
  );
};

export default Header;
