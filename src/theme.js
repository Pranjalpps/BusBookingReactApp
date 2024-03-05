import { createTheme } from "@material-ui/core/styles";
import customizedMuiComponents from "./customizedMuiComponents";
const theme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  overrides: {
    ...customizedMuiComponents,
  },
});

export default theme;
