import { Styles } from "../../theme/interfaces";

export interface TextProps {
  color?: string;
  /**
   * Custom font-size
   * { 12: "12px", 14: "14px"}
   */
  fontSize?: keyof Styles["theme"]["fontSizes"];
  /**
   * Custom font-weight
   * { normal: 400 bold: 700 }
   */
  fontWeight?: "normal" | "bold";
  /**
   * Defines tag of the component defaults to 'span'
   */
  tag?: string;
  css?: object;
}
