import styled from "styled-components";
import React from "react";
import { Styles } from "../../theme/interfaces";

export const Button = styled(({ type, css, ...props }) => (
  <button {...props} />
))`
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Roboto Condensed", sans-serif;
  font-size: ${(props: Styles) => props.theme.fontSizes[14]};
  width: ${props => props.width || "100%"};
  ${props => props.theme.buttons[props.type]};
  ${props => props.css};
`;
