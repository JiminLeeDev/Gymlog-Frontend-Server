import * as React from "react";
import IconButton from "@mui/material/IconButton";
import CommentViewIcon from "@mui/icons-material/ChatBubble";
import DropDownMenu from "../../dropdown_menu/dropdown_menu";
import CommentIcon from "@mui/icons-material/ChatBubble";

export default function CommentMenu() {
  return (
    <DropDownMenu
      btn={
        <IconButton
          variant={"contained"}
          sx={{ color: "dropdown_menu.content" }}
        >
          <CommentIcon />
          댓글
        </IconButton>
      }
      menu_data={[
        {
          icon: <CommentViewIcon />,
          text: "댓글 보기",
          link: "/",
          disabled: false,
        },
      ]}
    />
  );
}
