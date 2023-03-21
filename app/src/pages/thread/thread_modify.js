import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ThreadWrite() {
  const params = useParams();
  const [threadData, setThreadData] = useState({
    content: "",
    title: "",
    category: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !vallidationPassed.title ||
      !vallidationPassed.content ||
      threadData.category === ""
    ) {
      return;
    }

    fetch(`https://portfoliodb.link:8080/thread`, {
      method: "PUT",
      body: JSON.stringify({
        id: params.id,
        title: threadData.title,
        content: threadData.content,
        category: threadData.category,
        write_datetime: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          alert("글이 수정되지 않았으니 다시 시도해주세요, 죄송합니다.");
        } else {
          window.location.href = `#/thread/view/${params.id}`;
          window.location.reload();
        }
      });
  };

  const [vallidationPassed, setVallidationPassed] = useState({
    title: true,
    content: true,
  });

  useEffect(() => {
    if (!localStorage.getItem("user_nickname")) {
      window.location.href = "#/login";
      window.location.reload();
    }

    fetch(`https://portfoliodb.link:8080/thread?id=${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.error || data.results.length < 1) {
          alert("성공적으로 게시글을 불러오지 못했습니다.");

          window.location.href = "/#";
          window.location.reload();
        } else {
          setThreadData({
            content: data.results[0].content,
            title: data.results[0].title,
            category: data.results[0].category,
          });
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
      <Avatar sx={{ m: 1 }} src="avatar.jpg" />

      <Typography component="h1" variant="h5" mb={1}>
        글 수정
      </Typography>

      <Box component="form" noValidate onSubmit={onSubmit} my={2} width={"50%"}>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={6} md={12}>
            <TextField
              required
              fullWidth
              name="title"
              label={`제목 ${
                !vallidationPassed.title ? "(1 글자 이상 25글자 이하)" : ""
              }`}
              value={threadData.title}
              error={!vallidationPassed.title}
              autoFocus
              onChange={(e) => {
                setThreadData({
                  ...threadData,
                  title: e.target.value,
                });

                if (e.target.value.length < 1 || e.target.value.length > 25) {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.target.name]: false,
                  });
                } else {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.target.name]: true,
                  });
                }
              }}
            />
          </Grid>

          <Grid item xs={6} md={12}>
            <TextField
              value={threadData.category}
              select
              label="카테고리"
              fullWidth
              onChange={(e) =>
                setThreadData({ ...threadData, category: e.target.value })
              }
              error={threadData.category === ""}
            >
              <MenuItem key="" value="">
                ...
              </MenuItem>
              <MenuItem key="일상" value="일상">
                일상
              </MenuItem>
              <MenuItem key="개발" value="개발">
                개발
              </MenuItem>
              <MenuItem key="취미" value="취미">
                취미
              </MenuItem>
              <MenuItem key="수필" value="수필">
                수필
              </MenuItem>
              <MenuItem key="기타" value="기타">
                기타
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              value={threadData.content}
              label={`본문 ${
                !vallidationPassed.content ? "(1 글자 이상)" : ""
              }`}
              name="content"
              error={!vallidationPassed.content}
              multiline
              rows={15}
              onChange={(e) => {
                setThreadData({
                  ...threadData,
                  content: e.target.value,
                });

                if (e.target.value.length < 1) {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.target.name]: false,
                  });
                } else {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.target.name]: true,
                  });
                }
              }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ bgcolor: "form.button.main", color: "form.button.content" }}
        >
          수정
        </Button>
      </Box>
    </Box>
  );
}
