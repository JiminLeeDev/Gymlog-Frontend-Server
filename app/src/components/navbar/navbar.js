import * as React from "react";
import Box from "@mui/material/Box";
import { MenuItem, Stack, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../sidebar/sidebar";
import ThreadMenu from "./menu/thread_menu";
import CommentMenu from "./menu/comment_menu";
import AccountMenu from "./menu/account_menu";

export default function NavBar() {
  const [searchOption, setSearchOption] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

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
      <Stack
        direction="row"
        spacing={2}
        display={{ xs: "none", md: "block" }}
        p={1}
      >
        <ThreadMenu />
        <CommentMenu />
        <AccountMenu />
      </Stack>

      <SideBar />

      <Stack direction="row" spacing={2} p={1}>
        <TextField
          value={searchOption}
          select
          fullWidth
          onChange={(e) => setSearchOption(e.target.value)}
          label="검색옵션"
        >
          <MenuItem key="category" value="category">
            카테고리
          </MenuItem>
          <MenuItem key="title" value="title">
            제목
          </MenuItem>
          <MenuItem key="nickname" value="nickname">
            작성자
          </MenuItem>
        </TextField>

        <TextField
          variant="standard"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <IconButton
          variant="contained"
          href=""
          sx={{ color: "navbar.content" }}
          onClick={() => {
            if (searchOption === "") {
              alert("검색 조건을 선택해주세요.");

              return;
            }

            if (searchValue === "") {
              alert("검색 값을 선택해주세요.");

              return;
            }

            window.location.href = `#/thread-list/by-${searchOption}/${searchValue}`;
            window.location.reload();
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
