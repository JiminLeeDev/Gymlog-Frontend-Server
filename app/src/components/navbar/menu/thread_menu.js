import * as React from "react";
import IconButton from "@mui/material/IconButton";
import PageIcon from "@mui/icons-material/Description";
import PageViewIcon from "@mui/icons-material/FindInPage";
import PageAddIcon from "@mui/icons-material/PostAdd";
import DropDownMenu from "../../dropdown_menu/dropdown_menu";

export default function ThreadMenu() {
  return (
    <DropDownMenu
      btn={
        <IconButton variant={"contained"} sx={{ color: "content.main" }}>
          <PageIcon />
          게시글
        </IconButton>
      }
      menu_data={[
        {
          icon: <PageViewIcon />,
          text: "게시글 보기",
          link: "/",
          disabled: false,
        },
        {
          icon: <PageAddIcon />,
          text: "게시글 작성하기",
          link: "/thread/write",
          disabled: false,
        },
      ]}
    />
  );
}
