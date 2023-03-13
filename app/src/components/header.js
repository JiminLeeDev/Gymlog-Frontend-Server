import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        mx={1}
        mt={1}
        mb={3}
      >
        <Typography variant="h1" component="h1" color="primary.main">
          GymLog
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
