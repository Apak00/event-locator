import React from "react";
import { HeaderContainer } from "./styled";
import { Text } from "../components";

// Since Header has nothing to do with our showcase I leave it like this
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Text color={"black"}>HEADER</Text>
    </HeaderContainer>
  );
};

export default Header;
