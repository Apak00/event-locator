import { TextProps } from "./interfaces";
import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { Styles as ThemeStyles } from "../../theme/interfaces";

type Styles = ThemeStyles & TextProps;

/**
 * Styled text
 */
export const Text: StyledComponent<any, any, TextProps> = styled(
  ({ customWeight, customSize, color, children, className, tag = "span" }) =>
    React.createElement(tag, { className }, children)
)`
  display: inline-block;
  text-decoration: ${(props: Styles): string => props.textDecoration};
  color: ${(props: Styles): string => props.color || "#fff"};
  ${(props: Styles): any => props.css};
`;
