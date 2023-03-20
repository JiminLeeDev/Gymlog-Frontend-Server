import { createTheme } from "@mui/material";

let palette = {
  primary: { main: "#EE7785" },
  secondary: { main: "#67D5B5" },
  success: { main: "#84B1ED" },
  background: { main: "#F8FAFF", sub: "#84B1ED" },
  content: { main: "blue" },
};

palette = {
  ...palette,
  dropdown_menu: {
    main: palette.primary.main,
    content: palette.content.main,
    item: { main: palette.primary.main, content: palette.content.main },
  },
};

export default createTheme({
  palette: palette,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.background.sub,
          color: palette.content.main,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.dropdown_menu.main,
        },
      },
    },
  },
});
