import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#FF385C" },
    secondary: { main: "#222222" },
    background: { default: "#ffffff" },
    text: { primary: "#222222", secondary: "#717171" }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"
    ].join(",")
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 9999 } // pill-ish
      }
    }
  }
});

export default theme;
