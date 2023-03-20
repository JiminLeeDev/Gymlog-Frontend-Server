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
import theme from "./config/theme";

import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import ThreadWrite from "./pages/thread_write";
import ThreadView from "./pages/thread_view";

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
              <Route path="/thread/by-nickname/:nickname" element={<Main />} />
              <Route path="/thread/by-title/:title" element={<Main />} />
              <Route
                path="/thread/by-write_date/:nickname"
                element={<Main />}
              />
              <Route path="/thread/by-category/:category" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/thread/write" element={<ThreadWrite />} />
              <Route path="/thread/view/:id" element={<ThreadView />} />
            </Routes>
          </HashRouter>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
