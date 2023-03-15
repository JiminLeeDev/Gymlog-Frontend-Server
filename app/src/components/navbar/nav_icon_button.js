import * as React from "react";
import IconButton from "@mui/material/IconButton";

export default function NavIconButton({ variant, link, icon, label }) {
  return (
    <IconButton
      variant={variant}
      onClick={() => {
        window.location.href = `#${link}`;
        window.location.reload();
      }}
      sx={{ color: "content.main" }}
    >
      {icon}
      {label}
    </IconButton>
  );
}
