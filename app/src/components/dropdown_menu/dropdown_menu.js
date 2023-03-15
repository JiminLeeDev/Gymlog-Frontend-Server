import * as React from "react";
import MenuList from "@mui/material/MenuList";
import DropDownMenuItem from "./dropdown_menu_item";
import { Box, Menu } from "@mui/material";

export default function DropDownMenu({ btn, menu_data }) {
  const [anchorElement, setAnchorElement] = React.useState(null);

  return (
    <Box display="inline-block">
      <Box onClick={(e) => setAnchorElement(e.currentTarget)}>{btn}</Box>

      <Menu
        open={anchorElement !== null}
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(null)}
      >
        <MenuList sx={{ bgcolor: "primary.main" }}>
          {menu_data.map((data, idx) => (
            <DropDownMenuItem
              icon={data.icon}
              text={data.text}
              link={data.link}
              disabled={data.disabled}
              key={idx}
            />
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
