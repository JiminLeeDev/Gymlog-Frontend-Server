import * as React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function SideBarIconButton({ link, icon, text }) {
  return (
    <ListItem
      disablePadding
      onClick={() => {
        window.location.href = `#${link}`;
        window.location.reload();
      }}
    >
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
