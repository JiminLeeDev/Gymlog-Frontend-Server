import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import theme from "./config/theme";

import Header from "./components/header";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer";

import Main from "./pages/main";

import Register from "./pages/account/register";
import LogIn from "./pages/account/login";
import LogOut from "./pages/account/logout";

import ThreadWrite from "./pages/thread/thread_write";
import ThreadView from "./pages/thread/thread_view";
import ThreadModify from "./pages/thread/thread_modify";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
              <Route
                path="/thread-list/by-nickname/:nickname"
                element={<Main />}
              />
              <Route path="/thread-list/by-title/:title" element={<Main />} />
              <Route
                path="/thread-list/by-category/:category"
                element={<Main />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/thread/write" element={<ThreadWrite />} />
              <Route path="/thread/view/:id" element={<ThreadView />} />
              <Route path="/thread/modify/:id" element={<ThreadModify />} />
            </Routes>
          </HashRouter>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
