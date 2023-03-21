import ModifyIcon from "@mui/icons-material/DriveFileRenameOutline";
import CommentDelete from "./comment_delete";

import { Divider, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function CommentView({ thread_id }) {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetch(`http://portfoliodb.link:8080/comment?thread_id=${thread_id}`)
      .then((data) => data.json())
      .then((data) =>
        setCommentData(
          data.results.map((result) => {
            return {
              ...result,
              is_writer:
                result.user_nickname === localStorage.getItem("user_nickname"),
            };
          })
        )
      );
  }, []);

  return (
    <Box>
      {commentData.map((data) => (
        <Box key={data.id} textAlign="left">
          <CommentDelete comment_id={data.id} thread_id={thread_id} />

          <IconButton>
            <ModifyIcon></ModifyIcon>
          </IconButton>

          <Typography variant="span" ml={4}>
            {data.user_nickname}에 의해 {data.write_datetime}에 작성됨.
          </Typography>

          <Divider width="25%" sx={{ my: "1%" }} />

          <Typography variant="body2" mb={2}>
            {data.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
