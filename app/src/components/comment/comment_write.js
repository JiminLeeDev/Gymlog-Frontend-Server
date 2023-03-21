import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

export default function CommentWrite({ thread_id }) {
  const [formData, setFormData] = React.useState({ content: "" });

  return (
    <Box
      component="form"
      noValidate
      onSubmit={(e) => {
        if (formData.content.length < 1) {
          return;
        }

        e.preventDefault();

        fetch(`https://portfoliodb.link:8080/comment`, {
          method: "POST",
          body: JSON.stringify({
            content: formData.content,
            user_nickname: localStorage.getItem("user_nickname"),
            write_datetime: new Date(),
            thread_id: thread_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((data) => {
            if (data.error) {
              alert("댓글이 작성되지 않았으니 다시 시도해주세요, 죄송합니다.");
            } else {
              window.location.href = `#/thread/view/${thread_id}/`;
              window.location.reload();
            }
          });
      }}
      my={2}
    >
      <TextField
        required
        fullWidth
        label={`댓글 ${formData.content.length < 1 ? "(1 글자 이상)" : ""}`}
        error={formData.content.length < 1}
        multiline
        rows={4}
        value={formData.content}
        onChange={(e) => setFormData({ content: e.target.value })}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ bgcolor: "form.button.main", color: "form.button.content" }}
      >
        댓글 작성
      </Button>
    </Box>
  );
}
