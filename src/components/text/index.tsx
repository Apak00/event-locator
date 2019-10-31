import { TextProps } from "./interfaces";
import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { Styles as ThemeStyles } from "../../theme/interfaces";

type Styles = ThemeStyles & TextProps;

/**
 * Styled text
 */
export const Text: StyledComponent<any, any, TextProps> = styled(
  ({ fontWeight, fontSize, color, children, className, tag = "span" }) =>
    React.createElement(tag, { className }, children)
)`
  display: inline-block;
  color: ${(props: Styles): string => props.color || "#fff"};
  font-size: ${(props: Styles): string =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes[12]};
  font-weight: ${(props: Styles): number =>
    props.fontWeight
      ? props.theme.fontWeights[props.fontWeight]
      : props.theme.fontWeights.normal};
  ${(props: Styles): any => props.css};
`;
