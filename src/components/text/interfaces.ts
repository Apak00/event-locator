import { Styles } from "../../theme/interfaces";

export interface TextProps {
  /**
   * Children
   *
   * @type {*}
   * @memberof text
   */
  children: any;
  /**
   * Disabled
   *
   * @type {boolean}
   * @memberof text
   */
  disabled?: boolean;
  /**
   * Control color of text component, with the given value you can choose which color should be displayed.
   * Please refer to the theme.ts > colors property to choose color names.
   *
   * @type {string}
   * @memberof Text
   */
  color?: string;
  /**
   * Custom font-size
   * For responsive value give array according to following breakpoints:
   * [ <320 , <768 , <1366 , >=1366 ]
   * Value should be the index of array given:
   * fontSizes: [12, 14, 16, 18, 22, 24, 26, 28, 30, 10],
   */
  customSize?: keyof Styles["theme"]["fontSizes"];
  /**
   * fontWeights: [400, 600, 700],
   */
  customWeight?: number;
  /**
   * Defines tag of the component defaults to 'span'
   */
  tag?: string;
  textDecoration?: any;
  css?: object;
}
