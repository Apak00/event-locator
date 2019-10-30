export interface CustomHeightWidth {
  /**
   * Height of image
   *
   * @type {string}
   */
  height?: string;
  /**
   * Minimum Width of image
   *
   * @type {string}
   */
  minWidth?: string;
  /**
   * Minimum Height of image
   *
   * @type {string}
   */
  minHeight?: string;
  /**
   * Width of image
   *
   * @type {string}
   */
  width?: string;
}
export interface IconProps extends CustomHeightWidth {
  /**
   * Name of image
   *
   * @type {string}
   */
  name?: string;
  /**
   * Source path of image
   *
   * @type {string}
   */
  src?: string;
  /**
   * Selected; Decides which image to use
   *
   * @type {bolean}
   */
  selected?: boolean;

  /**
   * Default props
   */
  [k: string]: any;
}
