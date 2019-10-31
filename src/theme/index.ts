import { Styles } from "./interfaces";

const baseTheme: Styles["theme"] = {
  fontSizes: {
    12: "12px",
    13: "13px",
    14: "14px"
  },
  fontWeights: { light: 300, normal: 400, bold: 700 },
  buttons: {
    primary: {},
    secondary: {}
  }
};

export default { ...baseTheme };
