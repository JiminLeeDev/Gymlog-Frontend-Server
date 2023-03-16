import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ThreadView() {
  const params = useParams();
  const [threadData, setThreadData] = useState({
    category: "",
    content: "",
    id: "",
    title: "",
    user_nickname: "",
    write_datetime: "",
  });

  useEffect(() => {
    fetch(`http://portfoliodb.link:8080/thread?id=${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.error || data.results.length < 1) {
          alert("성공적으로 게시글을 불러오지 못했습니다.");

          window.location.href = "#/";
          window.location.reload();
        } else {
          console.log(data);
          setThreadData(data.results[0]);
        }
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {threadData.category}
      <br />
      {threadData.title}
      <br />
      {threadData.content}
      <br />
      {threadData.user_nickname}
      <br />
      {threadData.id}
      <br />
      {threadData.write_datetime}
    </Box>
  );
}
