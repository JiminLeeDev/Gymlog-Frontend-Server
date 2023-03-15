import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function Login() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!id) {
      alert("아이디를 입력해주세요.");

      return;
    } else if (!password) {
      alert("비밀번호를 입력해주세요.");

      return;
    }

    fetch(`http://portfoliodb.link:8080/user?id=${id}&password=${password}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        } else {
          if (data.results.length < 1) {
            alert("올바르지 못한 아이디와 비밀번호입니다.");

            setID("");
            setPassword("");
          } else {
            localStorage.setItem("uesr_id", data.results[0].id);
            localStorage.setItem("user_password", data.results[0].password);
            localStorage.setItem("user_nickname", data.results[0].nickname);

            window.location.href = "#/";
            window.location.reload();
          }
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user_nickname")) {
      window.location.href = "#/";
      window.location.reload();
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src="avatar.jpg" />

      <Typography component="h1" variant="h5" mb={1}>
        로그인
      </Typography>

      <Box component="form" noValidate onSubmit={onSubmit} my={2} width="50%">
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="id"
              label={"id"}
              autoFocus
              value={id}
              onChange={(e) => setID(e.currentTarget.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label={"비밀번호"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ bgcolor: "primary.main" }}
        >
          로그인
        </Button>

        <Typography
          style={{ display: "flex", justifyContent: "flex-end" }}
          my={3}
          variant="body2"
        >
          <Link
            href="#/register"
            sx={{ textDecoration: "none", color: "content.main" }}
          >
            계정이 없으신가요?
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
