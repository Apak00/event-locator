import { Styles } from "./interfaces";

const baseTheme: Styles["theme"] = {
  fontSizes: {
    12: "12px",
    14: "14px"
  },
  fontWeights: [400, 600, 700],
  buttons: {
    primary: {},
    secondary: {}
  }
};

export default { ...baseTheme };
