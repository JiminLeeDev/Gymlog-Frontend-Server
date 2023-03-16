import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DropDownMenu from "./dropdown_menu/dropdown_menu";
import ProfileIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/VpnKey";
import LogOutIcon from "@mui/icons-material/Lock";
import RegisterIcon from "@mui/icons-material/LockPersonOutlined";

export default function AccountMenu() {
  return (
    <DropDownMenu
      btn={
        <IconButton variant={"contained"} sx={{ color: "content.main" }}>
          <ProfileIcon />
          계정
        </IconButton>
      }
      menu_data={[
        {
          icon: <LoginIcon />,
          text: "로그인",
          link: "/login",
          disabled: localStorage.getItem("user_nickname") !== null,
        },
        {
          icon: <LogOutIcon />,
          text: "로그아웃",
          link: "/logout",
          disabled: localStorage.getItem("user_nickname") === null,
        },
        {
          icon: <RegisterIcon />,
          text: "회원가입",
          link: "/register",
          disabled: localStorage.getItem("user_nickname") !== null,
        },
      ]}
    />
  );
}
