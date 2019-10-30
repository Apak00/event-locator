import React from "react";
import { CustomHeightWidth, IconProps } from "./interfaces";

/** Icon picks images from the src/images folder with given name */
export const Icon: (props: IconProps) => JSX.Element = ({
  name,
  height,
  width,
  ...props
}: IconProps): JSX.Element => {
  const iconSrc: string = name && require(`../../images/${name}`);
  const customHeightWidth: CustomHeightWidth = {
    height,
    width
  };

  return (
    <img style={customHeightWidth} src={iconSrc} alt="Decathlon" {...props} />
  );
};
