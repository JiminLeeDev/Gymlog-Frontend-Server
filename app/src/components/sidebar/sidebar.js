import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Drawer, IconButton, List, Stack } from "@mui/material";
import RegisterIcon from "@mui/icons-material/LockPersonOutlined";
import LoginIcon from "@mui/icons-material/VpnKey";
import CommentIcon from "@mui/icons-material/ChatBubble";
import PageViewIcon from "@mui/icons-material/FindInPage";
import PageAddIcon from "@mui/icons-material/PostAdd";
import LogOutIcon from "@mui/icons-material/Lock";
import SideBarIconButton from "./sidebar_icon_button";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Box>
      <Stack direction="row" spacing={2} display={{ xs: "block", md: "none" }}>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </Stack>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {[
            {
              text: "게시글 보기",
              icon: <PageViewIcon />,
              link: "",
              disabled: false,
            },
            {
              text: "게시글 작성",
              icon: <PageAddIcon />,
              link: "/thread/write",
              disabled: false,
            },
          ].map((item_data, idx) => (
            <SideBarIconButton
              key={idx}
              text={item_data.text}
              icon={item_data.icon}
              link={item_data.link}
              disabled={item_data.disabled}
            />
          ))}
        </List>

        <Divider />

        <List>
          {[
            {
              text: "댓글 보기",
              icon: <CommentIcon />,
              link: "",
              disabled: false,
            },
          ].map((item_data, idx) => (
            <SideBarIconButton
              key={idx}
              text={item_data.text}
              icon={item_data.icon}
              link={item_data.link}
              disabled={item_data.disabled}
            />
          ))}
        </List>

        <Divider />

        <List>
          {[
            {
              text: "로그인",
              icon: <LoginIcon />,
              link: "/login",
              disabled: localStorage.getItem("user_nickname") !== null,
            },
            {
              text: "회원가입",
              icon: <RegisterIcon />,
              link: "/register",
              disabled: localStorage.getItem("user_nickname") !== null,
            },
            {
              text: "로그아웃",
              icon: <LogOutIcon />,
              link: "/logout",
              disabled: localStorage.getItem("user_nickname") === null,
            },
          ].map((item_data, idx) => (
            <SideBarIconButton
              key={idx}
              text={item_data.text}
              icon={item_data.icon}
              link={item_data.link}
              disabled={item_data.disabled}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
