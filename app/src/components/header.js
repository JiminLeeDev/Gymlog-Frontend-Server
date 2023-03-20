import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center" }}
      mx={1}
      mt={1}
      mb={3}
    >
      <Typography variant="h1" component="h1" color="header.content">
        GymLog
      </Typography>
    </Box>
  );
}
