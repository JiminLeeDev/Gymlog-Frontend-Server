import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton } from "@mui/material";

export default function CommentDelete({ comment_id, thread_id }) {
  return (
    <IconButton
      onClick={() => {
        fetch(`http://portfoliodb.link:8080/comment`, {
          method: "DELETE",
          body: JSON.stringify({
            id: comment_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((data) => {
            if (data.error) {
              alert(
                "댓글이 삭제되지 않았습니다, 다시 시도해주세요. 죄송합니다"
              );
            } else {
              window.location.href = `#/thread/view/${thread_id}`;
              window.location.reload();
            }
          });
      }}
    >
      <DeleteIcon></DeleteIcon>
    </IconButton>
  );
}
