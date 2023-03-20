import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function Register() {
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !vallidationPassed.id ||
      !vallidationPassed.nickname ||
      !vallidationPassed.password
    ) {
      return;
    }

    fetch(`http://portfoliodb.link:8080/user`, {
      method: "POST",
      body: JSON.stringify({
        nickname: event.currentTarget.nickname.value,
        id: event.currentTarget.id.value,
        password: event.currentTarget.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          alert("회원가입 하지 못했습니다.");
        } else {
          alert("회원가입 되셨습니다.");
          window.location.href = "#/login";
          window.location.reload();
        }
      });
  };

  const [vallidationPassed, setVallidationPassed] = useState({
    id: false,
    password: false,
    nickname: false,
  });

  useEffect(() => {
    if (localStorage.getItem("user_nickname") !== null) {
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
      <Avatar sx={{ m: 1 }} src="avatar.jpg" />

      <Typography component="h1" variant="h5" mb={1}>
        회원가입
      </Typography>

      <Box component="form" noValidate onSubmit={onSubmit} my={2} width={"50%"}>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="id"
              label={`id ${
                !vallidationPassed.nickname ? "(8 글자 이상 25글자 이하)" : ""
              }`}
              error={!vallidationPassed.id}
              autoFocus
              onChange={(e) => {
                if (
                  e.currentTarget.value.length < 8 ||
                  e.currentTarget.value.length > 25
                ) {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.currentTarget.name]: false,
                  });
                } else {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.currentTarget.name]: true,
                  });
                }
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label={`닉네임 ${
                !vallidationPassed.nickname ? "(2 글자 이상 15글자 이하)" : ""
              }`}
              name="nickname"
              error={!vallidationPassed.nickname}
              onChange={(e) => {
                if (
                  e.currentTarget.value.length < 2 ||
                  e.currentTarget.value.length > 15
                ) {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.currentTarget.name]: false,
                  });
                } else {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.currentTarget.name]: true,
                  });
                }
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label={`비밀번호 ${
                !vallidationPassed.nickname ? "(8 글자 이상 25글자 이하)" : ""
              }`}
              type="password"
              error={!vallidationPassed.password}
              onChange={(e) => {
                if (
                  e.currentTarget.value.length < 8 ||
                  e.currentTarget.value.length > 25
                ) {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.currentTarget.name]: false,
                  });
                } else {
                  setVallidationPassed({
                    ...vallidationPassed,
                    [e.currentTarget.name]: true,
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
          회원가입
        </Button>

        <Typography
          style={{ display: "flex", justifyContent: "flex-end" }}
          my={3}
          variant="body2"
        >
          <Link
            href="#/login"
            sx={{ textDecoration: "none", color: "form.content" }}
          >
            이미 계정이 있으신가요?
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
