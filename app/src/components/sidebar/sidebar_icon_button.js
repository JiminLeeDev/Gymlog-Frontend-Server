import * as React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function SideBarIconButton({ link, icon, text, disabled }) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        disabled={disabled}
        onClick={() => {
          window.location.href = `#${link}`;
          window.location.reload();
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
