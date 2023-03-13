import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Register() {
  const theme = createTheme();
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
          throw new Error(data.error);
        } else {
          alert("성공적으로 회원가입했습니다.");
        }
      })
      .catch((data) => {
        alert("성공적으로 회원가입하지 못했습니다.");
      });
  };

  const [vallidationPassed, setVallidationPassed] = useState({
    id: false,
    password: false,
    nickname: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src="avatar.jpg" />

          <Typography component="h1" variant="h5" mb={1}>
            회원가입
          </Typography>

          <Box component="form" noValidate onSubmit={onSubmit} m={2}>
            <Grid container spacing={2} mb={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="id"
                  label={`id ${
                    !vallidationPassed.nickname
                      ? "(8 글자 이상 25글자 이하)"
                      : ""
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
                    !vallidationPassed.nickname
                      ? "(2 글자 이상 15글자 이하)"
                      : ""
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
                    !vallidationPassed.nickname
                      ? "(8 글자 이상 25글자 이하)"
                      : ""
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
              sx={{ bgcolor: "primary.main" }}
            >
              회원가입
            </Button>

            <Typography
              style={{ display: "flex", justifyContent: "flex-end" }}
              my={3}
              variant="body2"
            >
              <Link href="#" sx={{ textDecoration: "none" }}>
                이미 계정이 있으신가요?
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
