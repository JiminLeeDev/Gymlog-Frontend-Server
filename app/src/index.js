import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer";

import Register from "./pages/register";
import LogIn from "./pages/login";
import LogOut from "./pages/logout";
import Main from "./pages/main";

import { Box, Container, createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: { main: "#EE7785" },
    secondary: { main: "#67D5B5" },
    success: { main: "#84B1ED" },
    background: { main: "#F8FAFF", sub: "#84B1ED" },
    content: { main: "#71226e" },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#84B1ED",
          color: "#71226e",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#EE7785",
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <CssBaseline />

    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="md"
        sx={{ bgcolor: "background.main" }}
      >
        <Header />
        <NavBar />

        <Box bgcolor="background.sub" minHeight="100vh">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/writes/by-nickname/:nickname" element={<Main />} />
              <Route path="/writes/by-title/:title" element={<Main />} />
              <Route
                path="/writes/by-write_date/:nickname"
                element={<Main />}
              />
              <Route path="/writes/by-category/:category" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>
          </HashRouter>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
