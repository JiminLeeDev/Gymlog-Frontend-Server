import { Chip, Divider, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import ModifyIcon from "@mui/icons-material/DriveFileRenameOutline";

import CommentView from "../../components/comment/comment_view";
import CommenWrite from "../../components/comment/comment_write";

export default function ThreadView() {
  const params = useParams();
  const [threadData, setThreadData] = useState({
    category: "",
    content: "",
    id: "",
    title: "",
    user_nickname: "",
    write_datetime: "",
    is_writer: false,
  });
  useEffect(() => {
    fetch(`https://portfoliodb.link:8080/thread?id=${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.error || data.results.length < 1) {
          alert("성공적으로 게시글을 불러오지 못했습니다.");

          window.location.href = "#/";
          window.location.reload();
        } else {
          setThreadData({
            ...data.results[0],
            is_writer:
              data.results[0].user_nickname ===
              localStorage.getItem("user_nickname"),
          });
        }
      });
  }, []);

  return (
    <Box textAlign="center" p={3}>
      <Box minHeight="100vh">
        <Typography variant="h4">{threadData.title}</Typography>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          my={3}
        >
          {threadData.is_writer ? (
            <Box display="flex" justifyContent="flex-start">
              <IconButton
                onClick={() => {
                  fetch(`https://portfoliodb.link:8080/thread`, {
                    method: "DELETE",
                    body: JSON.stringify({ id: threadData.id }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((data) => data.json())
                    .then((data) => {
                      if (data.error) {
                        alert(
                          "글이 삭제되지 않았습니다, 다시 시도해주세요. 죄송합니다"
                        );
                      } else {
                        window.location.href = "#/";
                        window.location.reload();
                      }
                    });
                }}
                sx={{
                  color: "form.button.content",
                  display: threadData.is_writer ? "inline-block" : "none",
                }}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton
                onClick={() => {
                  window.location.href = `/#/thread/modify/${params.id}`;
                  window.location.reload();
                }}
                sx={{
                  color: "form.button.content",
                  display: threadData.is_writer ? "inline-block" : "none",
                }}
              >
                <ModifyIcon />
              </IconButton>
            </Box>
          ) : (
            ""
          )}

          <Box
            display={threadData.is_writer ? "inline-block" : "flex"}
            justifyContent="space-between"
            width="100%"
            textAlign="right"
          >
            <Typography>
              {threadData.user_nickname}에 의해 {threadData.write_datetime}에
              작성됨.
            </Typography>

            <Chip label={threadData.category} />
          </Box>
        </Box>

        <Divider width="100%" sx={{ mb: "3%" }}></Divider>

        <Typography variant="body1">{threadData.content}</Typography>
      </Box>

      <CommenWrite thread_id={params.id}></CommenWrite>
      <CommentView thread_id={params.id} />
    </Box>
  );
}
