import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [phoneCopied, setPhoneCopied] = React.useState(false);

  return (
    <Box component="footer" textAlign={"center"} my={1} bgcolor="footer.main">
      <Typography variant="h6" color="footer.content">
        This site is made by Jimin Lee
      </Typography>
      <IconButton
        onClick={() =>
          window.open(
            "https://github.com/JiminLeeDev/Gymlog-Frontend-Server",
            "_blank"
          )
        }
      >
        <GitHubIcon></GitHubIcon>
      </IconButton>

      <IconButton
        onClick={() =>
          window.open("https://www.instagram.com/jiminleesns0220/", "_blank")
        }
      >
        <InstagramIcon></InstagramIcon>
      </IconButton>
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText("jiminleedev0220@gmail.com");

          setEmailCopied(true);
        }}
      >
        <EmailIcon></EmailIcon>
      </IconButton>
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText("01032643411");

          setPhoneCopied(true);
        }}
      >
        <PhoneIcon></PhoneIcon>
      </IconButton>

      <Snackbar
        open={emailCopied}
        message="이메일 주소가 복사되었습니다."
        autoHideDuration={5000}
        action={
          <IconButton onClick={() => setEmailCopied(false)}>
            <CloseIcon></CloseIcon>
          </IconButton>
        }
        onClose={() => setEmailCopied(false)}
      />

      <Snackbar
        open={phoneCopied}
        message="핸드폰 번호가 복사되었습니다."
        autoHideDuration={5000}
        action={
          <IconButton onClick={() => setPhoneCopied(false)}>
            <CloseIcon></CloseIcon>
          </IconButton>
        }
        onClose={() => setPhoneCopied(false)}
      />
    </Box>
  );
}
