import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../sidebar/sidebar";
import ThreadMenu from "./menu/thread_menu";
import CommentMenu from "./menu/comment_menu";
import AccountMenu from "./menu/account_menu";

export default function NavBar() {
  return (
    <Box
      bgcolor="navbar.main"
      mt={1}
      mb={3}
      display="flex"
      justifyContent={"space-between"}
      py={0.5}
      px={1}
    >
      <Stack direction="row" spacing={2} display={{ xs: "none", md: "block" }}>
        <ThreadMenu />
        <CommentMenu />
        <AccountMenu />
      </Stack>

      <SideBar />

      <Stack direction="row" spacing={2}>
        <TextField variant="standard"></TextField>
        <IconButton
          variant="contained"
          href=""
          sx={{ color: "navbar.content" }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
