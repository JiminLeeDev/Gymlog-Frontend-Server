import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function DropDownMenuItem({ icon, text, link, disabled }) {
  return (
    <MenuItem
      disabled={disabled}
      sx={{ bgcolor: "dropdown_menu.item.main" }}
      onClick={() => {
        window.location.href = `#${link}`;
        window.location.reload();
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
}
